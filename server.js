const express = require("express")
const api = require('./backend/routes/api')
const cors = require("cors")

const app = express()

//serve static files in the build directory
app.use('/', express.static('frontend/build'))

//allow cross origin requests
app.use(cors())

//include the API endpoints
app.use('/api', api);

app.listen(3001)