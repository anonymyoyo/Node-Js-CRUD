const http = require('http');
const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");

let movies = require("./data/movies.json");
// require('dotenv').config();
// require("dotenv").config();

const PORT = process.env.PORT || 5001;

// const [req, method] = getReq(req);

const app = http.createServer((req, res) => {
    req.movies=movies;
    switch(req.method){
        case "get":
            getReq(req, res);
            break;
        case "post":
            postReq(req, res);
            break;
        case "put":
            putReq(req, res);
            break;
        case "delete":
            deleteReq(req, res);
            break;
            default:
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({title: 'NOT FOUND', message:'Route Not Found'}));
        res.end();
   
    }
    
});

app.listen(PORT, () =>{
    console.log('Server started on port : '+PORT);
});

// const express = require('express');
// const exphbs = require('express-handlebars');
// const bodyParser = require('body-parser');
// // const mysql = require('mysql');

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 1000;

// // Parsing middleware
// // Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({extended: false}));

// // Parse application/json0
// app.use(bodyParser.json());

// // Permet d'ajouter une liaison vers un fichier static et ici nous avons choisi le doc public
// app.use(express.static('public'));

// // Template enginr
// app.engine('hbs', exphbs({ extname:'.hbs'}));
// app.set('view engine', 'hbs');

// // Routes
// app.length('',(req, res) =>{
//     res.render('home');
// });

// app.listen(port, ()=> console.log("Listening on port "+port));