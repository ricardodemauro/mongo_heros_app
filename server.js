require('dotenv').config()

var express = require('express');
var log = require('morgan')('dev');

var db = require('./database');

//hero routes
var herosRoutes = require('./api/heros/heros.routes');
var app = express();

//configure bodyparser
var bodyParserJSON = express.json();
var bodyParserURLEncoded = express.urlencoded({extended:true});

//initialise express router
var router = express.Router();

// call the database connectivity function
db();

// configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Error handling
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });

// use express router
app.use('/api', router);
//call heros routing
herosRoutes(router);

// intialise server
app.listen(process.env.PORT ? process.env.PORT : 3000, (req, res) => {
    console.log(`Server is running on ${process.env.PORT ? process.env.PORT : 3000} port.`);
})