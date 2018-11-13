const express = require('express')
const models = require('../models/index');

const router = express.Router()

const studentsController = require('../controllers/StudentsController.js')

router.get('/students', studentsController.findAll)
router.get('/students/:id', studentsController.findOne)

module.exports = router