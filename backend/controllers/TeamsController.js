var db = require('../models/index');

module.exports.findAll = (req, res) => {
    db.Teams.findAll({
        include: [{
          model: db.Students
        }]
      }).then(
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
    db.Teams.findById(req.params.id).then(
        (result) => {
            if(result) {
                res.status(200).send(result)
            } else {
                res.status(404).send()
            }
        }
    )
}

module.exports.findStudents = async (req, res) => {
    let team = await db.Teams.findById(req.params.id)
    if(team) {
        let students = await team.getStudents()
        res.status(200).json(students)
    }
    res.status(404).send()
}