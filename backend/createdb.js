var db = require('./models/index');

db.sequelize.sync({force:true}).then(async () => {
    console.log('tables created')

    let student = await db.Students.create({
        name: 'Eduard Budacu',
        githubProfile: 'https://github.com/eduardbudacu',
        githubUsername: 'eduardbudacu'
    })

    let team = await db.Teams.create({
        name: 'WebtechSuperheroes',
        projectRepo: 'https://github.com/webtech-superheroes/webtech-hub'
    })

    await db.TeamMembers.create({
        studentId: student.id,
        teamId: team.id
    })
}).catch(() => {
    console.log('could not create tables')
})