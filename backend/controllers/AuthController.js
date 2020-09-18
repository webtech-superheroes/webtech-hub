const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var GitHubStrategy = require('passport-github').Strategy;

const secrets = require('../config/secrets.json')

passport.use(new GoogleStrategy({
    clientID: secrets.googleClientId,
    clientSecret: secrets.googleClientSecret,
    callbackURL: "https://hub.webtech-superheroes.net/api/auth/google/callback"
  },
  function(token, tokenSecret, profile, done) {
      console.log(profile)
      done(undefined, profile)
  }
));

passport.use(new GitHubStrategy({
  clientID: secrets.githubClientId,
  clientSecret: secrets.githubClientSecret,
  callbackURL: "https://hub.webtech-superheroes.net/api/auth/github/callback",
  scope: ['user', 'repo', 'admin:org']
},
function(accessToken, refreshToken, profile, cb) {
    console.log(profile, accessToken, refreshToken)
    profile.token = accessToken
    cb(undefined, profile)
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
    res.redirect('/account');
}

module.exports.loginWithGithub = passport.authenticate('github', { 
  scope: ['user', 'repo', 'admin:org'],
  state: 'bbbaa'
})

module.exports.githubCallback = (req, res) => {
  res.redirect('/account');
} 

module.exports.userDetails = (req, res) => {
  if(req.user) {
    res.json({ id: req.user.id, username: req.user.username });
  } else {
    console.log('not logged in')
    res.status(401).send()
  }
}

module.exports.passport = passport
//register route

//logout route
module.exports.logout = (req, res) => {
  req.logout();
  res.redirect('/login');
}