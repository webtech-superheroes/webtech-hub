const express = require("express")
const router = express.Router()

const studentsController = require('../controllers/StudentsController.js')

const checkAuthentication = require('../utils/auth')

router.get('/students', checkAuthentication, studentsController.findAll)
router.get('/students/:id', checkAuthentication, studentsController.findOne)
router.post('/students/:id/assignments', checkAuthentication, studentsController.createAssignment)

module.exports = router