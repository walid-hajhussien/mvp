angular.module('mainApp').service('check', function($http, $window) {
this.set=function(data,cb){

  $http({
    method: 'POST',
    url: 'http://127.0.0.1:5000/check',
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
//   username text NOT NULL ,
//   password text NOT NULL ,
//   PRIMARY KEY (id)
// );
