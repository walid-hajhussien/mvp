// add the module of database
var mysql = require('mysql');
// setup the connection

var dbConnection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  user: "ba8ca36afca931",
  // password: "password",
  password: '2e7cb6ba',
  insecureAuth: true,
  database: 'heroku_2de4345a1bfca38'
});
// make the conection
dbConnection.connect(function(err) {
  if (err) {
    console.log('access dinay to database')
  } else {
    console.log('database has been connected')
  }
});

var query1=`
CREATE TABLE IF NOT EXISTS data (
  id INTEGER NOT NULL AUTO_INCREMENT ,
  firstname text NOT NULL ,
  lastname text NOT NULL ,
  age text NOT NULL ,
  class text NOT NULL,
  color text NOT NULL,
  PRIMARY KEY (id)
);`
dbConnection.query(query1, function(err, result){
  if(result){
    console.log('table data has been created');
  }
})

var query2=`CREATE TABLE IF NOT EXISTS users (
  id INTEGER NOT NULL AUTO_INCREMENT ,
  name text NOT NULL ,
  email text NOT NULL ,
  code text NOT NULL,
  username text NOT NULL,
  password text Not Null,
  PRIMARY KEY (id)
);`
dbConnection.query(query2, function(err, result){
  if(result){
    console.log('table users has been created');
  }
})







module.exports.db = dbConnection;
