//Schema for inserting the theatre details
const mongoose = require('mongoose');
const addnewTheatreSchema = mongoose.Schema({
  city_name: {
    type:String,
    required:true
  },
  theatre_name:{
    type:String,
    required:true
  },
  place:{
    type:String,
    required:true
  }
});

const addnewTheatre =module.exports = mongoose.model('addnewtheatres', addnewTheatreSchema);
