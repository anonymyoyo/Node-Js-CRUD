const http = require('http');

const PORT = process.env.PORT || 1000;

const app = http.createServer((req, res) => {

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