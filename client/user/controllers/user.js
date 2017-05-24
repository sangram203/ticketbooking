app.controller('getmovielist', function($scope, $http, $rootScope,$location){
  $scope.msg = "this is done";
  $http.get('/user/getmovielist').then(function(response){
   $scope.listedmovies =response.data;
 });

  $('#booknowinput').on('click',function(){
    $('#movielist').show();
  });
  $scope.getmovielist = function (){
    $scope.getmovielistinput = angular.element(event.target).text();
    sessionStorage.setItem("movieName", $scope.getmovielistinput);
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
  $scope.gettheshowdates = function(){
    var x = $scope.userscity;
    console.log(x);
  }
  $scope.seatnumberitem = function (){
    $scope.getitems = angular.element(event.target).text();
    sessionStorage.setItem("seatNumber", $scope.getitems);
    return (y);
  }
  $scope.getthecitydata = function(){
    $scope.getcitynameitem = angular.element(event.target).text();
    sessionStorage.setItem("cityname", $scope.getcitynameitem);
  }
  $scope.getusershowdate = function(){
    $scope.getshowdate = angular.element(event.target).text();
    sessionStorage.setItem("usershowdate", $scope.getshowdate);
  }
  $scope.getusertheatrename = function(){
    $scope.getTheatrename = angular.element(event.target).text();
    sessionStorage.setItem("usertheatrename", $scope.getTheatrename);
  }
  $scope.getusershowtime = function(){
    $scope.getShowtime = angular.element(event.target).text();
    sessionStorage.setItem("usershowtime", $scope.getShowtime);
  }
  $scope.userMoviename = sessionStorage.getItem("movieName");
  $scope.userdefiedcity = sessionStorage.getItem("cityname");
  $scope.usershowdate = sessionStorage.getItem("usershowdate");
  $scope.usertheatrename = sessionStorage.getItem("usertheatrename");
  $scope.usershowtime = sessionStorage.getItem("usershowtime");

  var s_seat=0,no_of_seat,no;
var countdiv=[];
  var seatOnload = function(){

  $(document).ready(function(){
    $('#Seatclass').change(function(){
      var sel=$('#Seatclass').find(":selected").text();
      if(sel=="Premier")
      {

      $('#silver .seatname').addClass('grey');
      $('#gold .seatname').removeClass('grey');
      }

      if(sel=="Executive")
      {
        $('#gold .seatname').addClass('grey');
        $('#silver .seatname').removeClass('grey');
      }

    $('#noofseats').change(function(){
       no = $('#noofseats').find(":selected").text();
      no_of_seat=document.getElementById("totalst").innerHTML= no;
      //alert(no);
    $('.seatname').click(function(){

    if(!$(this).hasClass('grey')||$(this).hasClass('red'))
    {
  //alert($(this).hasClass('grey'));
      if(countdiv.length < no)
      {

        $(this).toggleClass("d1");
        var id=$(this).attr('id');
        var cn=$(this).hasClass('d1');

        if(cn)
            {
                countdiv.push(id);
                  $rootScope.TotalSeat=JSON.stringify(countdiv);
              s_seat= document.getElementById("st").innerHTML=countdiv;
              // count++;

              }

        else{
              var ind=countdiv.indexOf(id);
              countdiv.splice(ind,1);
              $rootScope.TotalSeat=JSON.stringify(countdiv);
            }
  if(sel== "SILVER")
  {
    document.getElementById("amt").innerHTML=countdiv.length*200;
  }
  else
  {
    document.getElementById("amt").innerHTML=countdiv.length*280;
  }

  }
  else {

          alert("Request you to  book only " + no +" seats");
    }
  }

      $scope.seats = document.getElementById("st").innerHTML;
      $scope.Amount=document.getElementById("amt").innerHTML;
      $scope.numberSeat=document.getElementById("totalst").innerHTML;
      sessionStorage.setItem("seats", $scope.seats);
      sessionStorage.setItem("Amount", $scope.Amount);
      sessionStorage.setItem("numberSeat", $scope.numberSeat);
  });

  });

  });

  });

};
seatOnload();
// $scope.coutSeat = sessionStorage.getItem("numberofSeat");
// alert($scope.coutSeat);
// $scope.nextPage=function(){
// $rootScope.Amount=document.getElementById("amt").innerHTML;
// $rootScope.TotalSeat1= s_seat;
// $rootScope.coutSeat=no_of_seat;
//
// if(countdiv.length==no_of_seat)
// {
// // alert('no of seat'+no_of_seat);
// $location.path('/makePayment');
// }
// else {
//   alert('Please Reselect No. of Seats');
// }
//
// };
$scope.userMoviename = sessionStorage.getItem("movieName");
$scope.userdefiedcity = sessionStorage.getItem("cityname");
$scope.usershowdate = sessionStorage.getItem("usershowdate");
$scope.usertheatrename = sessionStorage.getItem("usertheatrename");
$scope.usershowtime = sessionStorage.getItem("usershowtime");

$scope.seattotal = sessionStorage.getItem("seats");
$scope.totalAmount = sessionStorage.getItem("Amount");
$scope.userNumberSeat = sessionStorage.getItem("numberSeat");
$scope.confirmPage = function(){
var t= angular.toJson({Title: $scope.userMoviename});
var c=angular.toJson({City: $scope.userdefiedcity});
var t1=angular.toJson({Theatre: $scope.usertheatrename});
var s=angular.toJson({Show: $scope.usershowtime});
var sn=angular.toJson({SeatNo: $scope.seattotal});
var sq=angular.toJson({Quantity: $scope.userNumberSeat});
var a=angular.toJson({Amount: $scope.totalAmount});
var e=angular.toJson({Email: $scope.email});
var p=angular.toJson({Phone: $scope.contact});
var dt=angular.toJson({BookDate: $scope.rootDate});
  $http.post('/show/newTicket/'+t+'/'+c+'/'+t1+'/'+s+'/'+sn+'/'+sq+'/'+a+'/'+e+'/'+p+'/'+dt).then(function(req, res){
    console.log("sucessfullyposted");
  });
}
});
