const express = require("express")
const path = require('path');
const passport = require('passport');
const api = require('./routes/api')
const auth = require('./routes/auth')

const cors = require("cors")

const app = express()

//allow cross origin requests
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('express-session')({
    secret: '1231k2j31l2j312489sd00asdaaweq',
    resave: true,
    saveUninitialized: true
  }));

//include the API endpoints
app.use('/', api);
app.use('/auth', auth);

app.use('/data', express.static('./data'))

app.listen(3001)