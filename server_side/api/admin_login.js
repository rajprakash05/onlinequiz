var express = require('express'),
    _       = require('lodash'),
    config  = require('../config'),
    db = require('../database/db'),
    jwt     = require('jsonwebtoken');
    
 

var app = module.exports = express.Router();

// XXX: This should be a database of users :).




function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresInMinutes: 60*5 });
}



app.post('/admin_login', function(req, res) {
  
 db.administration.findOne({ 'username': req.body.Username.toLowerCase()  }, 'username password', function (err, user) {
  if (err) return handleError(err);
 

 
  if (!user) {
     
    return res.status(401).send("The username or password don't match");
    
  }

  if (!(user.password === req.body.Password)) {
    
    return res.status(401).send("The username or password don't match");
   
  }

  res.status(201).send({
    id_token: createToken(user),user: admin
  });
 
})


  
});