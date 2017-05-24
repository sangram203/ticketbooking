const express = require('express');
var booked = express.Router();
var bookingmodel = require('../models/bookingmodel.js');

booked.post('/newTicket/:t/:c/:t1/:s/:sn/:sq/:a/:e/:p/:dt', function (req, res) {
  console.log(req.params.t);
  var booking = new bookingmodel({
    Title: req.params.t,
    City: req.params.c,
    Theatre: req.params.t1,
    Show: req.params.s,
    SeatNo: JSON.parse(req.params.sn),
    Quantity: req.params.sq,
    Amount: req.params.a,
    Email: req.params.e,
    Phone: req.params.p,
    BookDate:req.params.dt
  });
  booking.save(function(err,docs){
    console.log('Booking Saved Successfully');
  });
});


module.exports = booked;
