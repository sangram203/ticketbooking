app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/addnewmovie',{
    templateUrl: '../../views/addnewmovie.html',
    controller: 'searchmoviecontroller'
  }).when('/addnewtheatre',{
    templateUrl: '../../views/addnewtheatre.html',
  }).when('/deletetheatredetails',{
    templateUrl: '../../views/deletetheatredetails.html',
  }).when('/mapnewmoviedetails',{
    templateUrl: '../../views/mapnewmoviedetails.html',
  }).when('/editmoviemapping',{
    templateUrl: '../../views/editmoviemapping.html',
  })
}]);
