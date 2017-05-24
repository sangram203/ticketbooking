const express = require('express');
var getmovie = express.Router();
var maptheatremodel = require('../models/maptheatremodel.js');

getmovie.get('/getmovielist', function(req, res, next){
  maptheatremodel.find({},'movie_name',function(err, response){
    res.json(response);
  });
});

getmovie.post('/postrequestedmovie', function(req, res, next){
  var movie_name = req.body.movie_name;
   console.log('this is posted data:'+ movie_name);
   res.redirect('/user/getrequestedmovie/' + movie_name);
});
getmovie.get('/getrequestedmovie/:movie_name', function(req, res, next){
    var movie_name = req.params.movie_name
    console.log('this is the retrived data:' + movie_name);
  maptheatremodel.find({movie_name:movie_name},function(err, newaddedmovie){
    res.json(newaddedmovie);
  });
});


module.exports = getmovie;
