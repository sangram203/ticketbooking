app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/selectedmovie',{
    templateUrl: '../../views/booking/selectedmovie.html',
  }).when('/choosedate',{
    templateUrl: '../../views/booking/choosedate.html',
  }).when('/choosetheatre',{
    templateUrl: '../../views/booking/choosetheatre.html',
  }).when('/chooseshowtime',{
    templateUrl: '../../views/booking/chooseshowtime.html',
  }).when('/choosenumberofseats',{
    templateUrl: '../../views/booking/choosenumberofseats.html',
  })
}]);
