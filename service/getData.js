angular.module('mainApp').service('getData', function($http, $window) {
this.set=function(cb){

  $http({
    method: 'GET',
    url: 'http://127.0.0.1:5000/data'
  }).then(function successCallback(response) {
    cb(response)
    }, function errorCallback(response) {
      cb(response)
    });


}




})
