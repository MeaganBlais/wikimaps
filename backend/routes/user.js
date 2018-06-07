"use strict";
var bcrypt = require('bcrypt');

const express = require('express');
const router  = express.Router();
const salt = process.env.BCRYPT;

module.exports = (dataHelpers) => {

  router.post("/register", (req, res) => {
    console.log('ROUTE HAS BEEN HIT :D');
    let payload = req.body.registration;
    if (payload.pass === payload.passConf) {
      bcrypt.hash(payload.pass, salt, function(err, hash) {
        console.log(payload.pass);
        payload.password = hash;
        delete payload.pass;
        delete payload.passConf;
        dataHelpers.addUser(payload).then( () => {
          res.json({ success: true, user: payload.email });
          res.send;
        })
      });
    }
  });

  router.get("/login", (req, res) => {
    console.log('login route has been hit!');
  });

  return router;
}