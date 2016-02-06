var db = require('../db');

module.exports = {
  messages: {
    get: function (res, req) {
// a function which produces all the messages
      db.connect();
      db.query('SELECT message, chatroomID, userID FROM messages', function (err, result, fields) {
        if (err) { 
          throw err; 
        } else {
          for (var i = 0; i < result.length; i++) {
            //result is an array of objects;
            var row = result[i];
            console.log(row.userID + ':' + row.messages);
          } 
        }
      });
      db.end();

    }, 
    // a function which can be used to insert a message into the database
    post: function (res, req) {
      db.connect();
      var chatroomID = db.query('SELECT CHATROOMS.ID FROM CHATROOMS, MESSAGES WHERE CHATROOMS.ID=MESSAGES.CHATROOMID AND ' + REQ.BODY.CHATROOM + '= CHATROOMS.ROOMNAME');
      var userID = db.query('SELECT USER.ID FROM USERS, MESSAGES WHERE USERS.ID=MESSAGES.USERID AND ' + REQ.BODY.USERNAME + '= USERS.USERNAME');

      db.query('INSERT INTO messages (message,chatroomID,userID) values("' + 
        req.body.message + '", "' + chatroomID + '", "' + userID + '")',
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

