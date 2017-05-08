app.controller('searchmoviecontroller', function($scope, $http){
  $scope.movieSearch = function(){
    $http.get('http://www.omdbapi.com/?t='+ $scope.searchMovie).then(function(movie){
      $scope.movieData = movie.data;
      // console.log($scope.movieData);
    });
    return $scope.movieData;
  }
  $http.get('/new/getsearchmovie').then(function(response){
   $scope.getnewlyaddmovie =response.data;
   console.log($scope.getnewlyaddmovie);
 });

 $scope.addsearchedmovie = function(){
   $scope.moviestore = $scope.movieSearch();
   console.log($scope.moviestore);
   $http.post('/new/searchmoviepost', $scope.moviestore);
 }

});
