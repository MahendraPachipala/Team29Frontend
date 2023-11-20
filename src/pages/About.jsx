import React from "react";
import "../styles/About.css"; 

const About = () => {
  return (
    <div className="about-container">
      <h1>Welcome to TravelX</h1>
      <p className="about-text">
        TravelX is your ultimate travel companion, offering a seamless and
        delightful experience for all your travel needs. Whether you're a
        seasoned globetrotter or planning your first adventure, we're here to
        make your journey extraordinary.
      </p>
      <div className="services-section">
        <h2>Services</h2>
        <ul>
          <li>Flights</li>
          <li>Tours</li>
          <li>Hotels</li>
        </ul>
        <p className="about-text">
          Explore the world with our comprehensive services, providing you with
          the best deals and options. From exotic destinations to cozy
          accommodations, TravelX has everything you need to create lasting
          memories.
        </p>
      </div>
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p className="about-text">
          At TravelX, we are on a mission to make your travel experiences
          unforgettable. We strive to provide convenience and quality, ensuring
          your journey is filled with joy and relaxation. Our dedicated team
          works tirelessly to bring you the best travel solutions, so you can
          focus on what matters most – enjoying the adventure.
        </p>
      </div>
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p className="about-text">
          Have questions or need assistance? Reach out to our friendly support
          team at support@travelx.com. We're here to help you every step of the
          way, from planning your trip to ensuring a smooth travel experience.
        </p>
      </div>
    </div>
  );
};

export default About;
