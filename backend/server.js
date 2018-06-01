"use strict";

//require('dotenv').config();

const PORT        = process.env.PORT || 3000;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const app         = express();

const morgan      = require('morgan');
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const knexLogger  = require('knex-logger');
const dataHelpers = require("./utilities/dataHelpers")(knex);

//Routes File Seperation
const userRoutes = require("./routes/user");



// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));
app.use(morgan('dev'));

//Routes
app.use("/user", userRoutes(dataHelpers));




app.listen(PORT, () => {
  console.log("WikiMaps is Listening on Port: " + PORT);
});