//---Add New Theatre routes---
const express = require('express');
var router = express.Router();
var addnewtheatre = require('../models/addtheatremodel.js');

router.get('/getaddedmovie', function(req, res, next){
  addnewtheatre.find(function(err, addnewTheatre){
    res.json(addnewTheatre);
  });
});

//add contact to database
router.post('/addtheatre', function(req, res, next){

  let newTheatre =  new addnewtheatre({
    city_name: req.body.city_name,
    theatre_name: req.body.theatre_name,
      place: req.body.place

  });
  newTheatre.save(function(err, addnewtheatre){
    if(err){
      res.json({msg: 'Failed to add Theatre'})
    }
    else{
      res.json({msg: 'sucessfully Threatre added'});
    }
  });

});
module.exports = router;
