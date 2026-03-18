const mongoose = require("mongoose");

const BikeSchema = new mongoose.Schema({

name:String,

brand:String,

price:Number,

image:String,

ownerEmail:String,

available:{
type:Boolean,
default:true
}

});

module.exports = mongoose.model("Bike",BikeSchema);