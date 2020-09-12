const express = require('express')

const router = express.Router()

const authController = require('../controllers/AuthController.js')

router.use(authController.passport.initialize())
router.use(authController.passport.session())

router.get('/google', authController.loginWithGoogle)

router.get('/google/callback', authController.passport.authenticate('google', { failureRedirect: '/login' }),
authController.googleCallback)

router.get('/github', authController.loginWithGithub)
router.get('/github/callback', authController.passport.authenticate('github', { failureRedirect: '/login'}),
authController.githubCallback)

module.exports = router;