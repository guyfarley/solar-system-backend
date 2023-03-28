const express = require('express')
const mysql = require('mysql')

// Connect to database
const pool = mysql.createPool({
    host        : process.env.DB_HOST,
    user        : process.env.DB_USER,
    password    : process.env.DB_PASS,
})

// Requests all planets
exports.home = (req, res) => {
    // Connect to DB
    pool.getConnection((err, connection) => {
        if (err) {
            throw err // didnt connect
        }
        console.log('connected to DB')
        // Using connection
        connection.query('SELECT * FROM solar_system_schema.planet', (err,rows) => {
            //release connection
            connection.release()
            if (!err) {
                res.send({rows})
            } else {
                console.log(err)
            }
            console.log('data: \n', rows)
        })
    })
}

// Requests specific planet and its moons
exports.planet = (req, res) => {
    // Connect to DB
    pool.getConnection((err, connection) => {
        if (err) {
            throw err // didnt connect
        } 
        console.log('connected to DB')
        // Using connection
        connection.query('SELECT * FROM solar_system_schema.planet, solar_system_schema.moon WHERE solar_system_schema.planet.planet_id = solar_system_schema.moon.planet_id AND solar_system_schema.planet.planet_id = ?',[req.params.planet_id], (err,rows) => {
            //release connection
            connection.release()
            if (!err) {
                res.send({rows})
            } else {
                console.log(err)
            }
            console.log('data: \n', rows)
        })
    })
}