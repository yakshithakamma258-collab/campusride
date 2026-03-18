const express = require("express");
const Bike = require("../models/Bike");

const router = express.Router();


// ADD BIKE
router.post("/add", async (req,res)=>{

try{

const { name, brand, price, image, ownerEmail } = req.body;

const bike = new Bike({
name,
brand,
price,
image,
ownerEmail
});

await bike.save();

res.json({ message:"Bike added successfully" });

}catch(err){

console.log(err);
res.status(500).json({ message:"Error adding bike" });

}

});


// GET ALL BIKES
router.get("/", async (req,res)=>{

try{

const bikes = await Bike.find({ available:true });

res.json(bikes);

}catch(err){

console.log(err);
res.status(500).json({ message:"Error fetching bikes" });

}

});


module.exports = router;