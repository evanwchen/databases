var db = require('../db');

// db.connect(function(err){
//  if (err) console.log('unsuccessful connection');
//  console.log('successful connection');

// });

module.exports = {
  messages: {
    get: function (req, res) {
// a function which produces all the messages
      console.log("hey, i am getting from models");
      // db.connect();
      db.query('SELECT m.message, c.roomname, u.username FROM messages m, users u, chatrooms c WHERE m.userID=u.id and m.chatroomID=c.id;', function (err, result, fields) {
        if (err) { 
          throw err; 
        } else {
          console.log("Iam teh result:", result);
          res.status(201).send(result);
        }
      });
      // db.end();

    }, 
    // a function which can be used to insert a message into the database
    post: function (req) {
      db.connect();
      var chatroomID = db.query('SELECT CHATROOMS.ID FROM CHATROOMS, MESSAGES WHERE CHATROOMS.ID=MESSAGES.CHATROOMID AND ' + REQ.BODY.CHATROOM + '= CHATROOMS.ROOMNAME');
      var userID = db.query('SELECT USER.ID FROM USERS, MESSAGES WHERE USERS.ID=MESSAGES.USERID AND ' + REQ.BODY.USERNAME + '= USERS.USERNAME');

      db.query('INSERT INTO messages (message,chatroomID,userID) values("' + 
        req.body.message + '", "' + chatroomID + '", "' + userID + '")',
        function(err, result, fields) {
          if(err) { 
            throw err; 
          } else { 
            res.send(result, 201); 
          }
        });
      db.end();
    } 
  },

  users: {
    // 
    get: function () {

    },
    // post the new username into the users DB table
    post: function (res, req) {
      db.connect();
      db.query('INSERT INTO users (username) values("' + req.body.username + '")',
        function(err, result, fields) {
          if(err) { 
            throw err; 
          } else { 
            res.send('success'); 
          }
        });
      db.end();
    } 
  },

  chatrooms: {
    // 
    get: function () {

    },
    // post the new username into the users DB table
    post: function (res, req) {
      db.connect();
      db.query('INSERT INTO chatrooms (roomname) values("' + req.body.roomname + '")',
        function(err, result, fields) {
          if(err) { 
            throw err; 
          } else { 
            res.send('success'); 
          }
        });
      db.end();
    } 
  }
};

