import "../style.css";

function BikeCard({bike,onBook}){

return(

<div className="bike-card">

<img
src={bike.image || "https://cdn-icons-png.flaticon.com/512/2972/2972185.png"}
className="bike-img"
/>

<h3>{bike.name}</h3>

<p><b>Brand:</b> {bike.brand}</p>

<p><b>Price:</b> ₹{bike.price}</p>

<button
className="book-btn"
onClick={()=>onBook(bike)}
>
Book Bike
</button>

</div>

);

}

export default BikeCard;