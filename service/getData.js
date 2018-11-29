angular.module('mainApp').service('getData', function($http, $window) {
this.set=function(cb){

  $http({
    method: 'GET',
    // url: 'http://127.0.0.1:5000/data'
    url: 'https://peaceful-journey-59874.herokuapp.com/data'
  }).then(function successCallback(response) {
    cb(response)
    }, function errorCallback(response) {
      cb(response)
    });


}




})
