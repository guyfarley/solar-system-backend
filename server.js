const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

require('dotenv').config()

//starting express app
const app = express()

app.use(cors());

// Routing
const routes = require('./routes/routes')
app.use('/', routes)

app.listen(8080, () => {
    console.log('listening')
})

