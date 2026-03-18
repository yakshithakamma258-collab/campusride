import { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";
import BikeCard from "../components/BikeCard";
import Navbar from "../components/Navbar";

function RenterDashboard(){

const [bikes,setBikes] = useState([]);

useEffect(()=>{
getBikes();
},[]);

const getBikes = async ()=>{

try{

const res = await axios.get("https://campusride-1.onrender.com/api/bikes");

setBikes(res.data);

}catch(err){

console.log(err);
alert("Error loading bikes");

}

};

const bookBike = async (bike)=>{

try{

await axios.post("http://localhost:5000/api/bookings/book",{

bikeId: bike._id,
bikeName: bike.name,
renterEmail: localStorage.getItem("userEmail")

});

alert("Bike booked successfully");

}catch(err){

console.log(err);
alert("Booking failed");

}

};

return(

<div>

<Navbar/>

<div className="row">

<div className="col-3 sidebar">

<h2>CampusRide</h2>

<div
className="menu-item"
onClick={()=>window.location.href="/renter"}
>
Dashboard
</div>

<div
className="menu-item"
onClick={()=>window.location.href="/bookings"}
>
My Bookings
</div>

<div
className="menu-item"
onClick={()=>window.location.href="/"}
>
Logout
</div>

</div>

<div className="col-9 content">

<h2>Available Bikes</h2>

{bikes.map((bike)=>(
<BikeCard
key={bike._id}
bike={bike}
onBook={bookBike}
/>
))}

</div>

</div>

</div>

);

}

export default RenterDashboard;