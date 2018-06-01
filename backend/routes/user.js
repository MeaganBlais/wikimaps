"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/register", (req, res) => {
    console.log('ROUTE HAS BEEN HIT :D');
    console.log(req.body);
    res.json({greeting: "hello world"});
    res.send;
  });

  return router;
}