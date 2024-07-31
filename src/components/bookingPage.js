import React from "react";
import BookingForm from "./bookingForm";
import restaurantImg from "../assets/restaurant.jpg";
import resturantChefImg from "../assets/restaurant chef B.jpg";
import "../styles/main.css";
import "../styles/bookingPage.css";

export default function BookingPage({ ...props }) {
  return (
    <div>
      <div className="banner">
        <div className="banner-container">
          <div className="banner-text">
            <h1 className="markazi-display-title">Little Lemon</h1>
            <h2 className="markazi-sub-title">Barcelona</h2>
            <h3 className="karla-card-title">Find a table for any occasion</h3>
            <div className="gallery">
              <img src={restaurantImg} alt="restaurant" />
              <img src={resturantChefImg} alt="chef" />
            </div>
            <div className="form-container">
              <BookingForm
                availableTimes={props.availableTimes}
                updateTimes={props.updateTimes}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
