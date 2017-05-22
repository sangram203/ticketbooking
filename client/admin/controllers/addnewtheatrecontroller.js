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

  $scope.cityList = [
    // { city_name: "--Choose a city--", theatre_name:"Choose a theatre name"},
    //Mumbai
    { city_name: "Mumbai.", theatre_name:"IMAX BIG Cinemas", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Mumbai.", theatre_name:"Inox R-City Ghatkopar", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Mumbai.", theatre_name:"Big Cinema, R city Mall", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Mumbai.", theatre_name:"PVR Cinema", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Mumbai.", theatre_name:"Eros Cinema", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Mumbai.", theatre_name:"Regal Theatre", showtime:[{time:'1'},{time:'2'},{time:'3'}]},

    //Delhi
    { city_name: "Delhi.", theatre_name:"PVR Cinemas - PVR Gold Class", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Delhi.", theatre_name:"Cinepolis Unity One - Rohini", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Delhi.", theatre_name:"PVR Vikaspuri", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Delhi.", theatre_name:"PVR Cinemas", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Delhi.", theatre_name:"Big Cinemas", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Delhi.", theatre_name:"Fun Cinema", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
      { city_name: "Delhi.", theatre_name:"Q Cinemas", showtime:[{time:'1'},{time:'2'},{time:'3'}]},

    //Kolkata
    { city_name: "Kolkata.", theatre_name:"New Empire Cinema", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Kolkata.", theatre_name:"Priya Cinema", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Kolkata.", theatre_name:"Nandan West Bengal Film Centre", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Kolkata.", theatre_name:"Cinepolis - Lake Mall", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Kolkata.", theatre_name:"Prachi Cinema", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Kolkata.", theatre_name:"Menoka Cinema", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Kolkata.", theatre_name:"Ashoka Cinema", showtime:[{time:'1'},{time:'2'},{time:'3'}]},

    //Bengaluru
    { city_name: "Bengaluru.", theatre_name:"Pune", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Bengaluru.", theatre_name:"4", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Bengaluru.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Bengaluru.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},

    //Hyderabad
    { city_name: "Hyderabad.", theatre_name:"Pune", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Hyderabad.", theatre_name:"4", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Hyderabad.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Hyderabad.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},

    //Chennai
    { city_name: "Chennai.", theatre_name:"Pune", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Chennai.", theatre_name:"4", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Chennai.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Chennai.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},

    //Ahmedabad
    { city_name: "Ahmedabad.", theatre_name:"Pune", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Ahmedabad.", theatre_name:"4", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Ahmedabad.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Ahmedabad.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},

    //Pune
    { city_name: "Pune.", theatre_name:"Pune", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Pune.", theatre_name:"4", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Pune.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Pune.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},

    //Surat
    { city_name: "Surat.", theatre_name:"Pune", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Surat.", theatre_name:"4", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Surat.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Surat.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},

    //Visakhapatnam
    { city_name: "Visakhapatnam.", theatre_name:"Pune", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Visakhapatnam.", theatre_name:"4", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Visakhapatnam.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Visakhapatnam.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},

    //Bhubaneswar
    { city_name: "Bhubaneswar.", theatre_name:"Pune", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Bhubaneswar.", theatre_name:"4", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Bhubaneswar.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Bhubaneswar.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},

    //Chandigarh
    { city_name: "Chandigarh.", theatre_name:"Pune", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Chandigarh.", theatre_name:"4", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Chandigarh.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
    { city_name: "Chandigarh.", theatre_name:"5", showtime:[{time:'1'},{time:'2'},{time:'3'}]},
  ];
  // $scope.self = $scope.cityList;
        // angular.forEach(self.time, function (value, key) {
        //   console.log(value + " ~~ " + key);
        // })
  //       $scope.submark = [];
  // angular.forEach($scope.cityList, function(value, key) {
  //   angular.forEach(value.showtime, function(value, key) {
  //     $scope.submark.push(value);
  //     console.log( $scope.submark);
  //   });
  // });

});
