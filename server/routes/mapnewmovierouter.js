const express = require('express');
var mapnewmovie = express.Router();
var addnewtheatre = require('../models/addtheatremodel.js');

mapnewmovie.get('/mapnewmovie', function(req, res, next){
  addnewtheatre.find({},'city_name',function(err, newaddedmovie){
    res.json(newaddedmovie);
  });
});
mapnewmovie.get('/mapnewmovietheatrename', function(req, res, next){
  addnewtheatre.find({}, '_id',function(err, newaddedmovie){
    res.json(newaddedmovie);
  });
});
module.exports = mapnewmovie;