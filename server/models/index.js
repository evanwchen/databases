var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // 
    get: function () {},
    // post the new username into the users DB table
    post: function () {}
  }
};

