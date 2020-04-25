var db = require('./models/index');

var teams = require("./sample-data/teams.json")

db.sequelize.sync({force:true}).then(async () => {
    console.log('tables created')

    let team = await db.Teams.create({
        name: 'WebtechSuperheroes',
        projectRepo: 'https://github.com/webtech-superheroes/webtech-hub'
    })

    let student = await db.Students.create({
        name: 'Eduard Budacu',
        githubProfile: 'https://github.com/eduardbudacu',
        githubUsername: 'eduardbudacu'
    })

    await db.TeamMembers.create({
        studentId: student.id,
        teamId: team.id
    })

    student = await db.Students.create({
        name: 'Cristina Pana',
        githubProfile: 'https://github.com/cristinapana',
        githubUsername: 'cristinapana'
    })


    await db.TeamMembers.create({
        studentId: student.id,
        teamId: team.id
    })
    
    teams.forEach(async (team) => {
        await db.Teams.create(team)
    })
    
}).catch(() => {
    console.log('could not create tables')
})