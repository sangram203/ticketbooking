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
       $("#selecteditems ul").append('<li class="theatreName"><button class="fa fa-times-circle buttons" aria-hidden="true"></button>'+str+'</li>');
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
    var showTime = Array();
     $( "#showtimebox option:selected" ).each(function() {
       str += $( this ).text() + " ";
       showTime.push(str);
       $("#selectedshowtime ul").append('<li class="showtimeitems"><button class="fa fa-times-circle showtimebutton" aria-hidden="true"></button>' + showTime[showTime.length - 1] + '</li>');
       $('.showtimebutton').click(function(){
         $(this).closest('.showtimeitems').remove();
       });

       return showTime;
     });
     $scope.show_time = showTime;
     console.log($scope.show_time);
 });
 //Date picker functionality
 $( function() {
    $( "#datepicker" ).datepicker();
    var str = "";
    var showDate = Array();
    $("#getSelectedshowdate").on("click",function(){
     $( "#showtimebox option:selected" ).each(function() {
       str = $("#datepicker").val() + " ";
       showDate.push(str);
       $("#selectedDate ul").append('<li class="showdate"><button class="fa fa-times-circle showdatebutton" aria-hidden="true"></button>' + showDate[showDate.length - 1] + '</li>');
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
        $('#selecteditems ul li').each(function(){var phrases = [];var phrase = '';phrase += $(this).text();phrases.push(phrase);console.log(phrases);});
        console.log($scope.moviename);
        console.log($scope.cityname);
       var detailsoftheatres ={
         movie_name:$scope.moviename,
         city_name:$scope.cityname,
         selected_theater:["10:00pm","9:00am"],
         selected_showtime:["10:00pm","9:00am"],
         selected_showdate:["23/05/2017","12/04/2017"]
       };
       $http.post("/map/addnewmaptheatre/", detailsoftheatres).success(function(detailsoftheatres, status) {
         console.log('Data posted successfully');
       })
    }
});
