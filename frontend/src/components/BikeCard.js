import "../style.css";

function BikeCard({ bike, onBook }) {
  return (
    <div className="bike-card">

      <h3>{bike.name}</h3>

      <p><b>Brand:</b> {bike.brand}</p>

      <p><b>Price:</b> ₹{bike.price}</p>

      <button
        className="book-btn"
        onClick={() => onBook(bike)}
      >
        Book Bike
      </button>

    </div>
  );
}

export default BikeCard;