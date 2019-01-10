const express = require('express')

const router = express.Router()

const studentsController = require('../controllers/StudentsController.js')

router.get('/students', studentsController.findAll)
router.get('/students/:id', studentsController.findOne)

const teamsController = require('../controllers/TeamsController.js')

router.get('/teams', teamsController.findAll)
router.get('/teams/:id', teamsController.findOne)

router.get('/teams/:id/students', teamsController.findStudents)

module.exports = router