import React from "react";
import { FaUsers, FaMapMarkedAlt, FaHandshake, FaShieldAlt, FaWallet, FaCar, FaLeaf, FaMobileAlt, FaStar } from "react-icons/fa";
import '../css/About.css'
const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        At <strong>InterCity Ride</strong>, we redefine travel by connecting passengers with private vehicle owners. Our platform ensures seamless city-to-city rides without disrupting the owner's planned route.
      </p>

      <h2><FaMapMarkedAlt /> Seamless Travel Across Cities</h2>
      <p>Passengers find rides between cities without affecting the owner’s planned route.</p>

      <h2><FaUsers /> Optimized Matchmaking</h2>
      <p>The platform intelligently pairs drivers and riders heading the same way.</p>

      <h2><FaCar /> Efficient Alternative to Public Transport</h2>
      <p>Passengers don’t have to rely only on buses or trains.</p>

      <h2><FaMobileAlt /> Platform Development</h2>
      <p>We are building a mobile app for ride-matching and pre-booking.</p>

      <h2><FaShieldAlt /> Safety & Trust</h2>
      <p>Verified drivers and passengers, GPS tracking, and user ratings ensure reliability.</p>

      <h2><FaWallet /> Pricing Model</h2>
      <p>Cost-sharing based on fuel, distance, and demand with digital payments.</p>

      <h2><FaCar /> Ride Options</h2>
      <p>Passengers can choose vehicle type based on comfort and preference.</p>

      <h2><FaLeaf /> Sustainable Travel</h2>
      <p>Carpooling helps reduce emissions and traffic congestion.</p>

      <h2><FaHandshake /> Marketing & Growth</h2>
      <p>Referral rewards, local partnerships, and social media campaigns.</p>

      <h2><FaStar /> Driver Ratings & Reviews</h2>
      <p>Passengers rate drivers based on safety, comfort, and reliability.</p>

      <h2><FaLeaf /> Social Impact Tracking</h2>
      <p>Users can track their carbon footprint reduction through shared rides.</p>

      <p>
        Join us in making travel smarter, safer, and more eco-friendly!
      </p>
    </div>
  );
};

export default About;

