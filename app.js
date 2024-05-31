const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
// const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 1000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.listen(port, ()=> console.log("Listening on port "+port));