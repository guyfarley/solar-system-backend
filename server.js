const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const PORT = process.env.PORT || 8080;
require("dotenv").config();

//starting express app
const app = express();

app.use(cors());

// Routing
const routes = require('./routes/routes')
app.use('/', routes)

app.listen(PORT, () => {
  console.log("listening");
});

