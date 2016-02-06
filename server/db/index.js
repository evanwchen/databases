var mysql = require('mysql');
var request = require('request');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var dbConnection = mysql.createConnection({
  user: 'root',
  password: 'pass',
  database: 'chat'
});

module.exports = dbConnection;