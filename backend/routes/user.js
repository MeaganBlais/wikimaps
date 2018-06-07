"use strict";
var bcrypt = require('bcrypt');

const express = require('express');
const router  = express.Router();
const salt = process.env.BCRYPT;

module.exports = (dataHelpers) => {

  router.post("/register", (req, res) => {
    let payload = req.body.registration;
    if (payload.pass === payload.passConf) {
      bcrypt.hash(payload.pass, salt, function(err, hash) {
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

  router.post("/login", (req, res) => {
    dataHelpers.getUser(req.body.loginData.email).then( (user) => {
      if (user.length > 0) {
        bcrypt.hash(req.body.loginData.password, salt, function(err, hash) {
          if (hash == user[0].password) {
            res.json({ success: true, user: user[0].email });
            res.send;
          }
          else {
            res.json({ success: false, error: 'Incorrect password!' });
            res.send;
          }
        });
      } else {
        res.json({ success: false, error: 'User not found!' });
        res.send;
      }
    });
  });

  return router;
}