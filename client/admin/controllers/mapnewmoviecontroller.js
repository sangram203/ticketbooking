app.controller('mapnewmoviecontroller', function($scope, $http){

//Get list of cities added
  $http.get('/map/mapnewmovie').then(function(response){
   $scope.mapnewmoviecityname =response.data;
 });

 //Get the added movie
 $http.get('/map/getsearchmoviename').then(function(response){
  $scope.getavailablemovie =response.data;
  console.log($scope.getavailablemovie);
});

 //Get & post the Selected city and corresponding theatres
 $scope.selectedcity = function(){
   console.log($scope.mapselectedcity.city_name);
   $http.post('/map/mapnewmovietheatrename', $scope.mapselectedcity);
   $http.get('/map/mapnewmovietheatrename/'+$scope.mapselectedcity.city_name).then(function(response){
    $scope.mapnewmovietheatre =response.data;
  });
 };

//Selected theatres functionality
 $('#getSelectedTheatre').click(function(){
     var str = "";
     $( "#selectedElements option:selected" ).each(function() {
       str += $( this ).text();
       $("#selecteditems").append('<li class="theatreName"><button class="fa fa-times-circle buttons" aria-hidden="true"></button><span>'+str+'</span></li>');
       $('.buttons').click(function(){
         $(this).closest('.theatreName').remove();
       });
     });
 });

 //show time functionality
 $scope.showtimelist = [
   {"time_span":"9:00 AM"},{"time_span":"9:15 AM"},{"time_span":"9:30 AM"},{"time_span":"9:45 AM"},{"time_span":"10:00 AM"},{"time_span":"10:15 AM"},{"time_span":"10:30 AM"},{"time_span":"10:45 AM"},
   {"time_span":"11:00 AM"},{"time_span":"11:15 AM"},{"time_span":"11:30AM"},{"time_span":"11:45AM"},{"time_span":"12:00 PM"},{"time_span":"12:15 PM"},{"time_span":"12:30 PM"},{"time_span":"12:45 PM"},{"time_span":"01:00 PM"},
  {"time_span":"01:15 PM"},{"time_span":"01:30 PM"},{"time_span":"01:45 PM"},{"time_span":"02:00 PM"},{"time_span":"02:15 PM"},{"time_span":"02:30 PM"}
 ];
 $('#getSelectedshowtime').click(function(){
     var str = "";
     $( "#showtimebox option:selected" ).each(function() {
       str += $( this ).text();
       $("#selectedshowtime").append('<li class="showtimeitems"><button class="fa fa-times-circle showtimebutton" aria-hidden="true"></button>' + str+ '</li>');
       $('.showtimebutton').click(function(){
         $(this).closest('.showtimeitems').remove();
       });
     });
 });
 //Date picker functionality
 $( function() {
    $( "#datepicker" ).datepicker();
    var str = "";
    $("#getSelectedshowdate").on("click",function(){
     $( "#showtimebox option:selected" ).each(function() {
       str = $("#datepicker").val();
       $("#selectedDate").append('<li class="showdate"><button class="fa fa-times-circle showdatebutton" aria-hidden="true"></button>' + str + '</li>');
       $('.showdatebutton').click(function(){
         $(this).closest('.showdate').remove();
       });
     });
 });
  });
  //posting mapped theatres data
  $scope.mappedmoviepost= function(){
        $scope.moviename = document.getElementById("moviename").value;
        $scope.cityname = document.getElementById("cityname").value;

        //get the selected theatre array[]
        function theatresName(){
          var theatres = [];
          var name = '';
          $('#selecteditems li').each(function(){
            name = $(this).text();
            theatres.push(name);
          });
          return theatres;
        }
        var selectedTheatres = theatresName();

          //get the selected show timing array[]
          function showTime(){
            var shows = [];
            var time = '';
            $('#selectedshowtime li').each(function(){
              time = $(this).text();
              shows.push(time);
            });
            return shows;
          }
          var selectedshowtime = showTime();

          //get the selected show date array[]
          function showDate(){
            var showsD = [];
            var date = '';
            $('#selectedDate li').each(function(){
              date = $(this).text();
              showsD.push(date);
            });
            return showsD;
          }
          var selectedshowdate = showDate();
         var detailsoftheatres ={
         movie_name:$scope.moviename,
         city_name:$scope.cityname,
         selected_theater: selectedTheatres,
         selected_showtime:selectedshowtime,
         selected_showdate:selectedshowdate
        };
       $http.post("/map/addnewmaptheatre/", detailsoftheatres).success(function(detailsoftheatres, status) {
         console.log('Data posted successfully');
       })
    }
});
