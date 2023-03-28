const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

require('dotenv').config()

//starting express app
const app = express()

app.use(cors());

//connecting to sql database
const connection = mysql.createConnection({
    host        : process.env.DB_HOST,
    user        : process.env.DB_USER,
    password    : process.env.DB_PASS,
})

if (connection) {
    console.log('OK!')
}

//routes
app.get('/', (req,res) => {
    res.send("database stuff")
})

app.listen(8080, () => {
    console.log('listening')
})

// querying for all planets
/* connection.query('SELECT * FROM solar_system_schema.planet', 
    function(err, res, fields) {
        if (err) {
            console.log(err)
        }
        console.log(res)
    }
) */

console.log('\n')

// querying for specific planet
/* connection.query('SELECT * FROM solar_system_schema.planet WHERE planet_id = "pl-pl"', 
    function(err, res, fields) {
        if (err) {
            console.log(err)
        }
        console.log(res)
    }
) */

console.log('\n')

// querying for a specific planet and its moons
/* connection.query('SELECT * FROM solar_system_schema.planet, solar_system_schema.moon WHERE solar_system_schema.planet.planet_id = solar_system_schema.moon.planet_id AND solar_system_schema.planet.planet_id = "pl-ea"', 
    function(err, res, fields) {
        if (err) {
            console.log(err)
        }
        console.log(res)
    }
) */

connection.end()
