require('dotenv').config()

const express = require('express')
const PORT = process.env.PORT
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const db = require('./config/db')

// app
const app = express()

// middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({}))
app.use(cors())

// routes
routes(app)

// database
db.connect()

// listening
app.listen(PORT, () => {
   console.log('sever running on port: ' + PORT)
})
