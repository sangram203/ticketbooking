app.controller('mapnewmoviecontroller', function($scope, $http){
  $http.get('/map/mapnewmovie').then(function(response){
   $scope.mapnewmoviecityname =response.data;
 });
 $scope.selectedcity = function(mapselectedcity){
   console.log($scope.mapselectedcity);
   $http.post('/map/mapnewmovietheatrename', $scope.mapselectedcity)
 };
});
