var db = require('../models/index');

module.exports.findAll = (req, res) => {
    db.Students.findAll().then(
           (results) => {
               res.status(200).send({
                   status: "success",
                   results: results
               });
           }
       ).catch(() => {
           res.status(500).send({
               status: "error"
           })
       })
};

module.exports.findOne = (req, res) => {
    db.Students.findByPk(req.params.id, {
        include: [{
          model: db.Teams
        }]
      }).then(
        (result) => {
            if(result) {
                res.status(200).send(result)
            } else {
                res.status(404).send()
            }
        }
    )
}

module.exports.createAssignment = async (req, res) => {
    try {
        let student = await db.Students.findByPk(req.params.id)
        let assignment = await db.StudentAssignments.create({
            student_id: student.id,
            repo: req.body.repo,
            start_date: new Date(),
            submited: false,
            graded: false,
            grade: 0
        })
        res.status(201).send(assignment)
    } catch(ex) {
        console.log(ex)
        res.status(500).send('Server error')
    }
}