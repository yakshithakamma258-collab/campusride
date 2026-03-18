const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();


// CREATE BOOKING
router.post("/book", async (req,res)=>{

try{

const { bikeId, bikeName, renterEmail } = req.body;

const booking = new Booking({
bikeId,
bikeName,
renterEmail
});

await booking.save();

res.json({
message:"Bike booked successfully"
});

}catch(err){

console.log(err);

res.status(500).json({
message:"Booking failed"
});

}

});


// GET ALL BOOKINGS
router.get("/", async (req,res)=>{

try{

const bookings = await Booking.find();

res.json(bookings);

}catch(err){

console.log(err);

res.status(500).json({
message:"Error fetching bookings"
});

}

});


// DELETE BOOKING
router.delete("/:id", async (req,res)=>{

try{

await Booking.findByIdAndDelete(req.params.id);

res.json({
message:"Booking deleted successfully"
});

}catch(err){

console.log(err);

res.status(500).json({
message:"Delete failed"
});

}

});


module.exports = router;