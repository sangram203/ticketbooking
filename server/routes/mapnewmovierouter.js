const express = require('express');
var mapnewmovie = express.Router();
var addnewtheatre = require('../models/addtheatremodel.js');
var searchmovie = require('../models/searchmoviemodel.js');
var maptheatremodel = require('../models/maptheatremodel.js');
// mapnewmovie.param('city_name', function (req, res, next, id) {
//   console.log('CALLED ONLY ONCE');
//   next();
// });

mapnewmovie.get('/getsearchmoviename', function(req, res, next){
  searchmovie.find({},'Title',function(err, newaddedmovie){
    res.json(newaddedmovie);
  });
});
mapnewmovie.get('/getsearchmoviedetails', function(req, res, next){
  maptheatremodel.find({},function(err, newaddedmovie){
    res.json(newaddedmovie);
  });
});
mapnewmovie.delete('/deletetheatermovies/:id',function(req, res){
  maptheatremodel.remove({_id:req.params.id},function(err, docs){
    console.log('Movie Removed Successfully');
  });
});

mapnewmovie.get('/mapnewmovie', function(req, res, next){
  addnewtheatre.find({},'city_name',function(err, newaddedmovie){
res.json(newaddedmovie);
  });
});

mapnewmovie.get('/mapnewmovietheatrename/:city_name', function(req, res, next){
    var city_name = req.params.city_name
    console.log('this is the retrived data:' + city_name);
  addnewtheatre.find({city_name:city_name},'theatre_name',function(err, newaddedmovie){
    res.json(newaddedmovie);
  });

});
mapnewmovie.post('/mapnewmovietheatrename', function(req, res, next){
  var city_name = req.body.city_name;
   console.log('this is posted data:'+ city_name);
   res.redirect('/map/mapnewmovietheatrename/' + city_name);
});

mapnewmovie.post('/addnewmaptheatre', function(req, res, next){
  var moviename = req.body.movie_name;
  var cityname = req.body.city_name;
  var theatrename = req.body.selected_theater;
  var showtime = req.body.selected_showtime;
  var showdate = req.body.selected_showdate;
  console.log(moviename);
  console.log(cityname);
  console.log(theatrename);
  console.log(showtime);
  console.log(showdate);
  let newmapTheatre =  new maptheatremodel({
    movie_name: moviename,
    city_name: cityname,
      selected_theatres: theatrename,
      selected_showtime: showtime,
      selected_showdate: showdate

  });
  newmapTheatre.save(function(err, newmaptheatre){
    if(err){
      res.json({msg: 'Failed to add Theatre'})
    }
    else{
      res.json({msg: 'sucessfully Threatre added'});
    }
  });

});
module.exports = mapnewmovie;
