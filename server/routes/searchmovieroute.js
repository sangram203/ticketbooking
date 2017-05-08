const express = require('express');
var searchmovieroute = express.Router();
var searchmovie = require('../models/searchmoviemodel.js');

searchmovieroute.get('/getsearchmovie', function(req, res, next){
  searchmovie.find(function(err, newaddedmovie){
    res.json(newaddedmovie);
  });
});
searchmovieroute.post('/searchmoviepost', function(req, res, next){

  let newsearchmovie =  new searchmovie({
    Title: req.body.Title,
    Year: req.body.Year,
    Rated: req.body.Rated,
    Released: req.body.Released,
    Runtime: req.body.Runtime,
    Genre: req.body.Genre,
    Director: req.body.Director,
    Writer: req.body.Writer,
    Actors: req.body.Actors,
    Plot: req.body.Plot,
    Language: req.body.Language,
    Country: req.body.Country,
    Awards: req.body.Awards,
    Poster: req.body.Poster,
    Ratings: req.body.Ratings,
    Metascore: req.body.Metascore,
    imdbRating: req.body.imdbRating,
    imdbVotes: req.body.imdbVotes,
    imdbID: req.body.imdbID,
    Type: req.body.Type,
    BoxOffice: req.body.BoxOffice,
    Production: req.body.Production,
    Website: req.body.Website,
    Response: req.body.Ratings
  });
  newsearchmovie.save(function(err, searchmovie){
    if(err){
      res.json({msg: 'Failed to add movie'})
    }
    else{
      res.json({msg: 'sucessfully movie added'});
    }
  });

});
module.exports = searchmovieroute;
