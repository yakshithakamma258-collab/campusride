const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({

bikeId: String,

bikeName: String,

renterEmail: String,

date: {
type: Date,
default: Date.now
}

});

module.exports = mongoose.model("Booking",BookingSchema);