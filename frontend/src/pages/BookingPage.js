import { useEffect,useState } from "react";
import axios from "axios";
import "../style.css";

function Bookingpage(){

const [bookings,setBookings] = useState([]);

useEffect(()=>{
getBookings();
},[]);

const getBookings = async ()=>{

const res = await axios.get("https://campusride-1.onrender.com/api/bikes");

setBookings(res.data);

};

const deleteBooking = async (id)=>{

await axios.delete(`https://campusride-1.onrender.com/api/bikes/api/bookings/${id}`);

alert("Booking deleted");

getBookings();

};

return(

<div className="booking-container">

<h1>My Bookings</h1>

<div className="booking-grid">

{bookings.map((b)=>(

<div className="booking-card" key={b._id}>

<img
src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
className="bike-img" alt="bike"
/>

<h2>{b.bikeName}</h2>

<p><b>Email:</b> {b.renterEmail}</p>

<p><b>Date:</b> {new Date(b.date).toLocaleDateString()}</p>

<button
className="delete-btn"
onClick={()=>deleteBooking(b._id)}
>
Delete Booking
</button>

</div>

))}

</div>

</div>

);

}

export default Bookingpage;