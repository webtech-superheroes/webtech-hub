const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const secrets = require('../config/secrets.json')

passport.use(new GoogleStrategy({
    clientID: secrets.googleClientId,
    clientSecret: secrets.googleClientSecret,
    callbackURL: "http://localhost:3001/auth/google/callback"
  },
  function(token, tokenSecret, profile, done) {
      console.log(profile)
      done(undefined, profile)
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

//TODO: use Passport JS

//Scenarios:
//As a student I want to be able to login with my Gmail account
//As a student I want to be able to login with my Facebook account
//As a student I want to be able to login with my Linkedin account
//As a student I want to be able to login with my GitHub account

//login route
module.exports.login = (req, res) => {
    
}

module.exports.loginWithGoogle = passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' })

module.exports.googleCallback = (req, res) => {
    res.redirect('/');
}

module.exports.passport = passport
//register route

//logout route