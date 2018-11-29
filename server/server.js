var express =require('express');
var bodyParser=require('body-parser');
var dbConnection = require('../db/db.js');




var app = express();

//allow origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// the below code to connect 
app.use(express.static(__dirname + '/../'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(express.static(__dirname + '/../views'));


console.log(__dirname);

// add bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// rout
app.get('/data',function(req,res){
var query = `select * from data`
dbConnection.db.query(query, function(err, result) {
  if (err) {
      res.send('no data')
  } else if (result) {
    console.log(result);
    res.send(result)
  }


})

})
// to add student information to the server
app.post('/addData',function(req,res){
console.log(req.body);
  var firstname=req.body.firstname;
  var lastname=req.body.lastname;
  var age=req.body.age;
  var Class=req.body.Class;
  var color=req.body.color;

  console.log(firstname,lastname,age,Class,color);
  var query=`insert into data values(null,\"${firstname}\",\"${lastname}\",\"${age}\",\"${Class}\",\"${color}\") `
  dbConnection.db.query(query, function(err, result) {
          if(err){
            console.log(err);
            res.send('0')
          }else{
            console.log(result);
            res.send('1')
          }
    })

})


// to check the password and username
// 0-->(No username) 1-->(password corect) 2-->(wrong password)
app.post('/check',function(req,res){
  var username=req.body.username;
  var password=req.body.password;
  query=`select * from users where username=\"${username}\"`

dbConnection.db.query(query, function(err, result) {
    if (err) {
      res.send('wrong username')
    } else if (result) {
      console.log(result);
      // //console.log(result[0].username,result[0].password);
      if(result.length===0){
        console.log('no data');
        res.send('0');
      }
      else if(result[0].password==password){
        res.send('1');
      }else{
        console.log(result[0].password);
        console.log(password);
        res.send('2');
      }

    }
  })

})


// Regester the user data 1-->inserted 0-->Error

app.post('/sinup',function(req,res){
    console.log(req.body);
  var username=req.body.username;
  var password=req.body.password;
  var name = req.body.name;
  var email=req.body.email;
  var code=req.body.code;
  var query=`insert into users values(null,\"${name}\",\"${email}\",\"${code}\",\"${username}\",\"${password}\") `



  dbConnection.db.query(query, function(err, result) {
          if(err){
            console.log(err);
            res.send('0')
          }else{
            console.log(result);
            res.send('1')
          }
    })




})







var ip='127.0.0.1'
var port=process.env.PORT||5000
app.listen(port,ip);
console.log('listen to ip :'+ip +' and port :'+port);
