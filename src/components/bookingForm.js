import React from "react";
import "../styles/bookingPage.css";
import { useState, useEffect } from "react";

export default function BookingForm({ ...props }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  // Definir la función handleInput
  const handleInput = (e) => {
    const { id, value } = e.target;
    if (id === "date") {
      props.updateTimes(value);
    }
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  function printAll(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <form style={{ display: "grid", gap: "20px" }}>
      <label htmlFor="res-date" className="karla-section-title">
        Choose date
      </label>
      <input
        onChange={handleInput}
        className="karla-card-title input datepicker-input"
        type="date"
        id="date"
        min={minDate}
      />

      <label htmlFor="res-time" className="karla-section-title">
        Choose time
      </label>
      <select
        id="time"
        onChange={handleInput}
        className="karla-card-title input"
      >
        {props.availableTimes.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>

      <label
        htmlFor="guests"
        onChange={handleInput}
        className="karla-section-title"
      >
        Number of guests
      </label>
      <input
        onChange={handleInput}
        className="karla-card-title input"
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
      />

      <label htmlFor="occasion" className="karla-section-title">
        Occasion
      </label>
      <select
        id="occasion"
        onChange={handleInput}
        className="karla-card-title input"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input
        className="primary-button karla-paragraph"
        onClick={printAll}
        type="submit"
        value="Make Your reservation"
      />
    </form>
  );
}
