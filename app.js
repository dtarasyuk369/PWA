const express = require('express')
const bodyParser = require('body-parser')
const mongooseDB = require('mongoose')

const mongoConfig = require('./config/mongo')
const auth = require('./routes/auth')

const app = express()

// mongooseDB.connect()
//   .then(() => console.log('MongoDB connected.'))
//   .catch((err) => console.log(err))

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(require('cors')())


app.use('/auth', auth)

module.exports = app