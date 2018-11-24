// add the module of database
var mysql = require('mysql');
// setup the connection

var dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  // password: "password",
  password: '19919901',
  insecureAuth: true,
  database: 'chat'
});
// make the conection
dbConnection.connect(function(err) {
  if (err) {
    console.log('access dinay to database')
  } else {
    console.log('database has been connected')
  }
});



module.exports.db = dbConnection;
