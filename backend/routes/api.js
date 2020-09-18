const express = require('express')

const router = express.Router()

const authController = require('../controllers/AuthController.js')

router.use(authController.passport.initialize())
router.use(authController.passport.session())

const studentsController = require('../controllers/StudentsController.js')

router.get('/students', studentsController.findAll)
router.get('/students/:id', studentsController.findOne)

const teamsController = require('../controllers/TeamsController.js')

router.get('/teams', teamsController.findAll)
router.get('/teams/:id', teamsController.findOne)

router.get('/teams/:id/students', teamsController.findStudents)

const githubController = require('../controllers/GithubController.js')

router.get('/repos', githubController.getUserRepos)

router.get('/addrepo', githubController.createRepo)

module.exports = router