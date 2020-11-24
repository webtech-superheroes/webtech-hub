const express = require('express')

const router = express.Router()

const githubController = require('../controllers/GithubController.js')

router.get('/repos', githubController.getUserRepos)
router.post('/repos', githubController.createRepo)

module.exports = router