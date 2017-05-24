//Schema for map theatre details
const mongoose = require('mongoose');
const addnewmapTheatreSchema = mongoose.Schema({
  movie_name: {
    type:String,
    required:true
  },
  city_name:{
    type:String,
    required:true
  },
  selected_theatres:{
    type:String,
    required:true
  },
  selected_showtime:{
    type:String,
    required:true
  },
  selected_showdate:{
    type:String,
    required:true
  }
});

const addnewmapTheatre =module.exports = mongoose.model('newmaptheatres', addnewmapTheatreSchema);
