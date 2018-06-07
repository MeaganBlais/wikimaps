"use strict";

//require('dotenv').config();

const PORT        = process.env.PORT || 3000;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const app         = express();

const bodyParser  = require("body-parser");
const morgan      = require('morgan');
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const knexLogger  = require('knex-logger');
const dataHelpers = require("./utilities/dataHelpers")(knex);



//Routes File Seperation
const userRoutes = require("./routes/user");


//Need this to fix the issue for wierd connectivity error where the web browser doesn't let 'Acess-Control-Allow-Origin' check to pass (dont know)
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));
app.use(morgan('dev'));


//Routes
app.use("/user", userRoutes(dataHelpers));


app.listen(PORT, () => {
  console.log("WikiMaps is Listening on Port: " + PORT);
});