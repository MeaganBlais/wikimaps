
"use strict";

//require('dotenv').config();

const PORT        = process.env.PORT || 3000;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const app         = express();

const morgan      = require('morgan');


app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
//app.use(knexLogger(knex));



app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});