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
          for (var i=0; i<result.length; i++) {
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
      db.query('INSERT INTO messages (message,chatroomID,userID) values("'+ req.body.message+ '", "' + req.body.roomname+ '", "' + req.body.username+ '")',
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
    post: function () {
      
    }
  }
};

