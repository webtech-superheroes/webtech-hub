const express = require("express")
const path = require('path');
const passport = require('passport');
const api = require('./routes/api')
const auth = require('./routes/auth')

const cors = require("cors")

const app = express()

//allow cross origin requests
app.use(cors())

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }));

//include the API endpoints
app.use('/', api);
app.use('/auth', auth);

app.use('/data', express.static('./data'))

app.listen(3001)