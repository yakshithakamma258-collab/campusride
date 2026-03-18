import { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";

function BookingPage() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    try {
      const res = await axios.get("https://campusride-1.onrender.com/api/bookings");
      setBookings(res.data);
    } catch (err) {
      console.log(err);
      alert("Error loading bookings");
    }
  };

  const deleteBooking = async (id) => {
    try {
      await axios.delete(`https://campusride-1.onrender.com/api/bookings/${id}`);
      alert("Booking deleted");
      getBookings();
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="booking-container">

      <h1>My Bookings</h1>

      <div className="booking-grid">

        {bookings.map((b) => (
          <div className="booking-card" key={b._id}>

            <h2>{b.bikeName}</h2>

            <p><b>Email:</b> {b.renterEmail}</p>

            <p><b>Date:</b> {new Date(b.date).toLocaleDateString()}</p>

            <button
              className="delete-btn"
              onClick={() => deleteBooking(b._id)}
            >
              Delete Booking
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default BookingPage;