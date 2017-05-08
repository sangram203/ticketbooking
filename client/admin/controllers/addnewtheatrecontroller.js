//---Add New Theatre---
app.controller('addtheatrecontroller', function($scope, $http){
  //Get the theatre details
  $http.get('/api/getaddedmovie').then(function(response){
   $scope.theatredetails =response.data;
 });
 //post the theatre details
  $scope.insertTheatre = function(addnewTheatre){
    $http.post('/api/addtheatre',$scope.addnewTheatre);
  }
});
