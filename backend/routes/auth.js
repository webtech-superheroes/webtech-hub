const express = require('express')

const router = express.Router()

const authController = require('../controllers/AuthController.js')

router.get('/google', authController.loginWithGoogle)

router.get('/google/callback', authController.passport.authenticate('google', { failureRedirect: '/login' }),
authController.googleCallback)

module.exports = router;