import React from "react";
import "../css/Home.css";

const Home = () => {

    const handleBookingClick = () => {
        alert("🚧 Website Under Construction 🚧 \nWe're working hard to bring you an amazing booking experience. Stay tuned!");
      };
  return (
    <div className="home-container">
 <h1>City to City connect</h1>
 <h3 style={{color:'black'}}>NoBus, NoCab, NoTrain , NonStop #InterCity Ride</h3>
      <h1>Welcome to InterCity Ride</h1>
      <p>Your trusted taxi service for safe and comfortable travel.</p>
      <button className="book-now" onClick={handleBookingClick}>Book Your Ride</button>
    </div>
  );
};

export default Home;
