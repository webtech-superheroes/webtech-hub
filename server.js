const express = require("express")
const api = require('./backend/routes/api')

const app = express()

//serve static files in the build directory
app.use('/', express.static('frontend/build'))

//include the API endpoints
app.use('/api', api);

app.listen(3001)