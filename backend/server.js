const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const bikeRoutes = require("./routes/bikeRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/campusride")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));
app.use("/api/auth", authRoutes);
app.use("/api/bikes",bikeRoutes);
app.use("/api/bookings",bookingRoutes);


app.get("/", (req,res)=>{
res.send("CampusRide API Running");
});

app.listen(5000, ()=>{
console.log("Server running on port 5000");
});