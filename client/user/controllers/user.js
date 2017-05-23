app.controller('getmovielist', function($scope, $http){
  $scope.msg = "this is done";
  $http.get('/user/getmovielist').then(function(response){
   $scope.listedmovies =response.data;
 });

  $('#booknowinput').on('click',function(){
    $('#movielist').show();
  });
  $scope.getmovielist = function (){
    $scope.getmovielistinput = angular.element(event.target).text()
    $('#movielist').hide();
  }
  $scope.getmoviedetails = function(){
    var data =angular.toJson({movie_name: $scope.getmovielistinput});
     console.log(data);
    $http.post('/user/postrequestedmovie', data);
    $http.get('/user/getrequestedmovie/'+ $scope.getmovielistinput).then(function(response){
     $scope.retrivedmovie =response.data;

   });
  }
});
