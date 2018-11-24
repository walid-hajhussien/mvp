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

// add bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// rout
app.get('/',function(req,res){


var query = `select * from users`
dbConnection.db.query(query, function(err, result) {
  if (err) {

  } else if (result) {
    console.log(result);
    res.send(result)
  }


})

})

app.post('/',function(req,res){
  //var query=`insert into table `
  console.log(req.body);
res.send('we recived your post ')

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



  // console.log(req.body.username,req.body.password);
  // res.send('confirmed')
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
var port=5000
app.listen(port,ip);
console.log('listen to ip :'+ip +' and port :'+port);
