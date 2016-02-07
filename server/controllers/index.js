var mysql = require('mysql');
var request = require('request'); 
var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("Hey I am here");
      // return models.messages.get(req, res);
      // var data = '';
      // req.on('data', function(chunk){
      //   data += chunk;
      // });
      // req.on('end', function() {
      //   models.messages.get(JSON.parse(data));
      // });
      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var data = '';
      req.on('data', function(chunk){
        data += chunk;
      });
      req.on('end', function() {
        models.messages.post(JSON.parse(data));
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // 
    get: function (req, res) {},
    
    // when a user creates a new username, call the model for users.post
    post: function (req, res) {}
  }
};

