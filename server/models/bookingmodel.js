const mongoose = require('mongoose');
var BookingSchema = mongoose.Schema({
    Title : String,
    City : String,
    Theatre : String,
    Show : String,
    SeatNo : [],
    Quantity : String,
    Amount : String,
    Email : String,
    Phone : String,
    BookDate:Date
});
const userbooking =module.exports = mongoose.model('userbooking', BookingSchema);
