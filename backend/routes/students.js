const express = require("express")
const router = express.Router()

const studentsController = require('../controllers/StudentsController.js')

router.get('/students', studentsController.findAll)
router.get('/students/:id', studentsController.findOne)
router.post('/students/:id/assignments', studentsController.createAssignment)

module.exports = router