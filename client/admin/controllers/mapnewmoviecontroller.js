app.controller('mapnewmoviecontroller', function($scope, $http){
  $http.get('/map/mapnewmovie').then(function(response){
   $scope.mapnewmoviecityname =response.data;
   console.log($scope.mapnewmoviecityname);
 });
 $scope.selectedcity = function(mapselectedcity){
   console.log($scope.mapselectedcity);
   $http.post('/map/mapnewmovietheatrename', $scope.mapselectedcity)
 };
});
