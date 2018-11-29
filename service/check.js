angular.module('mainApp').service('check', function($http, $window) {
this.set=function(data,cb){

  $http({
    method: 'POST',
    // url: 'http://127.0.0.1:5000/check',
    url: 'https://peaceful-journey-59874.herokuapp.com/check',
    contentType: "application/json",
    data: JSON.stringify(data)
  }).then(function successCallback(response) {
    cb(response)
    }, function errorCallback(response) {
      cb(response)
    });


}




})


// CREATE TABLE users (
//   id INTEGER NOT NULL AUTO_INCREMENT ,
//   name text NOT NULL ,
//   email text NOT NULL ,
//   code text NOT NULL,
//   username text NOT NULL,
//   password text Not Null,
//   PRIMARY KEY (id)
// );


// CREATE TABLE IF NOT EXISTS data (
//   id INTEGER NOT NULL AUTO_INCREMENT ,
//   firstname text NOT NULL ,
//   lastname text NOT NULL ,
//   age text NOT NULL ,
//   class text NOT NULL,
//   color text NOT NULL,
//   PRIMARY KEY (id)
// );
