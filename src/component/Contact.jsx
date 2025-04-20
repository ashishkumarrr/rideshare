import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have a question or need assistance? Reach out to us!</p>
      
      <div className="contact-details">
        <p>📞 Phone: +91 7380369092/ 7394842782</p>
        <p>📧 Email: ashishhimanshu2017@gmail.com</p>
        <p>📍 Address: Vadodara, Gujarat, India</p>
      </div>

      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Message</label>
        <textarea placeholder="Write your message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
