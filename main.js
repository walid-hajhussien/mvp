mainApp = angular.module('mainApp', ['ngRoute']);
//before app run
mainApp.config(['$routeProvider',function($routeProvider){
$routeProvider

// the below its the route tools
.when('/home',{
  templateUrl :'views/home.html'
})
.when('/enter',{
  templateUrl :'views/enter.html',
  controller :'c1mainApp'
})
.when('/login',{
  templateUrl :'views/login.html',
  controller :'c1mainApp'
})
.when('/singup',{
  templateUrl :'views/singup.html',
  controller :'c1mainApp'
})
.otherwise({
  redirectTo:'/login'
})

}])
// after run the app
mainApp.run(function() {

})


// the main controller
mainApp.controller('c1mainApp', function($scope,getData,sinUp,check) {
  // remove
  $scope.remove = function(obj) {
    $scope.array.splice($scope.array.indexOf(obj), 1)
  }
  //add
  $scope.add = function(obj) {
    $scope.array.push({
      name: obj.name,
      age: obj.age,
      color: obj.color
    });
    $scope.data.name = "";
    $scope.data.age = "";
    $scope.data.color = "";
  }
  //variable
  $scope.acsess=false;
  $scope.className='body1'
  $scope.wrongPassword=false;
  //to send the data to the server
  $scope.check=function(obj){
    sinUp.set(obj,function(data){
      console.log(data);
    })
    console.log(obj);
  }
// login
  $scope.login=function(user){
    var obj={username:user.username,password:user.password}
    // if(obj.username=='ozil' && obj.password=='123'){
    //   $scope.acsess=true
    //   $scope.wrongPassword=false;
    // }else{
    //   $scope.wrongPassword=true;
    // }
    check.set(obj,function(data){
      if(data.data==0 || data.data==2){
        $scope.wrongPassword=true;
      }else{
        $scope.acsess=true
        $scope.wrongPassword=false;
      }
      console.log('data',data.data);
    })
  //  $scope.check(obj);

  }
// change the style after login to the main page
  $scope.go=function(){
    $("body").attr('class', 'body2');
  }

  // to get the data from server and render it
  $scope.render=function(){
  getData.set(function(data){
    console.log(data);
  })
  }


  $scope.array = [{
    name: 'walid',
    age: 27,
    color: 'green',
    image:"image/1.png"
  }, {
    name: 'ahmed',
    age: 26,
    color: 'blue',
    image:"image/2.png"
  }, {
    name: 'ayoub',
    age: 25,
    color: 'red'

  }]






})
