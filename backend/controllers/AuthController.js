const passport = require('passport');
var db = require('../models/index');

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
  scope: ['user', 'repo']
},
async function(accessToken, refreshToken, profile, cb) {
    console.log(profile, accessToken, refreshToken)
    try {
      let student = await db.Students.findOne({where: {githubId: profile.id }})

      if(student) {
        profile.studentId = student.id
      } else {
        let student = await db.Students.create({githubId: profile.id, name: profile._json.name ? profile._json.name : profile._json.login, githubProfile: profile._json.url, githubUsername: profile._json.login, profilePicture: profile._json.avatar_url})
        profile.studentId = student.id
      }
      console.log(student)
      profile.token = accessToken
      cb(undefined, profile)
    } catch(err) {
      cb(err, undefined)
    }
    
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
  scope: ['user', 'repo'],
  state: 'bbbaa'
})

module.exports.githubCallback = (req, res) => {
  res.redirect('/account');
} 

module.exports.userDetails = (req, res) => {
  if(req.user) {
    res.json({ studentId: req.user.studentId, githubId: req.user.id, username: req.user.username });
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