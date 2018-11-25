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
mainApp.controller('c1mainApp', function($scope,getData,sinup,check,addData) {
  // remove
  $scope.remove = function(obj) {
    $scope.array.splice($scope.array.indexOf(obj), 1)
  }
  //add student
  $scope.add = function(obj) {
    var data={
      firstname: obj.firstname,
      lastname:obj.lastname,
      age: obj.age,
      Class:obj.class,
      color: obj.color
    }
    console.log(data);
    $scope.array.push(data);
    addData.set(data,function(result){
      if(result){
        if(result.data==1){
          console.log('the data has been inserted');
        }else{
          console.log('the data not inserted');
        }
      }
    })
    $scope.data.firstname = "";
    $scope.data.lastname = "";
    $scope.data.color = "";
    $scope.data.class = "";
    $scope.data.age = "";
  }
  //variable
  $scope.acsess=false;
  $scope.className='body1'
  $scope.wrongPassword=false;
  $scope.pool=false;
  $scope.traggle=function(){
      $scope.pool=!$scope.pool
      if($scope.buttonName=='Add'){
        $scope.buttonName='Hide'
      }else{
        $scope.buttonName='Add'
      }
  }
  $scope.buttonName='Add';
  //sort by Age
  $scope.orderAge=function(){
    console.log(  $scope.array);
      $scope.array.sort(function(a,b){
        return a.age-b.age
      })
  }
  //sort by name
  $scope.orderName=function(){
    $scope.array.sort(function(a, b){
        var nameA=a.firstname.toLowerCase(), nameB=b.firstname.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return -1
        if (nameA > nameB)
            return 1
        return 0 //default return value (no sorting)
    })
  }


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
    check.set(obj,function(data){
      if(data.data==0 || data.data==2){
        $scope.wrongPassword=true;
      }else{
        $scope.acsess=true
        $scope.wrongPassword=false;
      }
      console.log('data',data.data);
    })

  }

//SignUp
$scope.signup=function(data){
  var obj={
    name:data.name,
    email:data.email,
    code:data.code,
    username:data.username,
    password:data.password
  }
  //clean the page
  data.code="";
  data.email="";
  data.name="";
  data.username="";
  data.password="";
  // send it to the server
  sinup.set(obj,function(data){
      if(data.data==1){
        $scope.acsess=true
      }else{
        console.log('Error data not inserted');
      }
  })
  //console.log(obj);
}

// change the style after login to the main page
  $scope.go=function(){
    $("body").attr('class', 'body2');
  }
  $scope.go2=function(){
    $("body").attr('class', 'body1');
  }

  // to get the data from server and render it
  $scope.render=function(){
  getData.set(function(data){
    $scope.array=data.data;
    console.log(data);
  })
  }


  $scope.array = []






})
