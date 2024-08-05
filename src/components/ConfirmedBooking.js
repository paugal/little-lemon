import React from "react";
import "../styles/bookingPage.css";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export default function ConfirmedBooking() {
  const { formData, setFormData } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      isSubmitted: false,
    });
    console.log(formData);
  };
  return (
    <div className="confirmed-booking">
      <h1>{formData.name} thank you for your reservation! </h1>
      <p>
        <h2>Day: </h2>
        <h2>{formData.date}</h2>
      </p>
      <p>
        <h2>Time: </h2>
        <h2>{formData.time}</h2>
      </p>
      <p>
        <h2>Number of guests: </h2>
        <h2>{formData.guests}</h2>
      </p>
      <p>
        <h2>Occasion:</h2>
        <h2>{formData.occasion}</h2>
      </p>

      <input
        className="primary-button cancel-button karla-paragraph"
        type="submit"
        value="Cancel Your Reservation"
        onClick={handleSubmit}
      />
    </div>
  );
}
