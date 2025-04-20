import React, { useState } from "react";
import "../css/Booking.css";

const Booking = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ride booked from ${pickup} to ${destination} on ${date}!`);
  };

  return (
    <div className="booking-container">
      <h1>Book Your Ride</h1>
      <form onSubmit={handleSubmit}>
        <label>Pickup Location</label>
        <input 
          type="text" 
          placeholder="Enter pickup location" 
          value={pickup} 
          onChange={(e) => setPickup(e.target.value)} 
          required
        />

        <label>Destination</label>
        <input 
          type="text" 
          placeholder="Enter destination" 
          value={destination} 
          onChange={(e) => setDestination(e.target.value)} 
          required
        />

        <label>Date & Time</label>
        <input 
          type="datetime-local" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required
        />

        <button type="submit" className="submit-button">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
