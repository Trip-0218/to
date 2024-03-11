import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/GetRide.css"; // Import your CSS file for styling

const GetYourRidePage = () => {
  const Navigate = useNavigate();
  const Book = () => {
    Navigate("/Trip");
  };

  return (
    <div className="get-your-ride-page">
      <section className="search-section">
        <div className="search-container">
          <h2>Book Your Ride Now!</h2>
          <p>
            Explore the convenience of hassle-free ride booking at your
            fingertips.
          </p>

          <form className="ride-search-form">
            <input type="text" placeholder="Enter your destination" />
            <input type="date" />
            <button type="submit">Search Rides</button>
          </form>
        </div>
      </section>

      <section className="featured-rides">
        <h2>Featured Rides</h2>
        <div className="ride-cards">
          {/* Display featured rides with images, details, and book now button */}
          <div className="ride-card">
            <img src="car1.jpg" alt="Car 1" />
            <h3>Luxury Sedan</h3>
            <p>Explore the city in style with our luxurious sedan.</p>
            <button onClick={Book}>Book Now</button>
          </div>
          {/* Add more ride cards as needed */}
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Get Your Ride?</h2>
        <ul>
          <li>Wide range of vehicle options</li>
          <li>Transparent pricing</li>
          <li>Easy booking process</li>
          <li>24/7 customer support</li>
        </ul>
      </section>
    </div>
  );
};

export default GetYourRidePage;
