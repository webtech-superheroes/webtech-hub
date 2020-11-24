const express = require("express")

const github = require('./routes/github')
const teams = require('./routes/teams')
const students = require('./routes/students')
const auth = require('./routes/auth')



const app = express()

//allow cross origin requests
//this should be active only in development mode
const cors = require("cors")
app.use(cors())


//use body parsers to read json and url encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authController = require('./controllers/AuthController.js')

app.use(require('express-session')({
    secret: '1231k2j31l2j312489sd00asdaaweq',
    resave: true,
    saveUninitialized: true
}));

app.use(authController.passport.initialize())
app.use(authController.passport.session())
  

//include the API endpoints
app.use('/', teams);
app.use('/', students);
app.use('/', github);
app.use('/auth', auth);

//include static files from the data directory
app.use('/data', express.static('./data'))

app.listen(3001)