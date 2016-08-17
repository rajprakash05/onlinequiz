var express = require('express'),
    _       = require('lodash'),
    config  = require('../../config'),
    db = require('../../database/db'),
    jwt     = require('jsonwebtoken');
 

var app = module.exports = express.Router();


app.post('/single_qus', function(req, res) {
  
 
  res.status(201).send({
    loggedin: true
  });
 



  
});