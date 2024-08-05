import React, { useContext, useEffect } from "react";
import { FormContext } from "../context/FormContext";

function getMaxDate() {
  const today = new Date();
  today.setMonth(today.getMonth() + 5); // Añadir 5 meses
  return today.toISOString().split("T")[0]; // Formato 'YYYY-MM-DD'
}

export default function BookingForm({ availableTimes, updateTimes }) {
  const { formData, setFormData } = useContext(FormContext);

  useEffect(() => {
    if (!formData.date) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        date: new Date().toISOString().split("T")[0],
      }));
    }
  }, [formData.date, setFormData]);

  useEffect(() => {
    if (!formData.time) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        time: availableTimes[0],
      }));
    }
  }, [formData.time, setFormData, availableTimes]);

  const maxDate = getMaxDate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, isSubmitted: true });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>
      <label className="karla-section-title" htmlFor="date">
        Choose date
      </label>
      <input
        className="karla-card-title input datepicker-input"
        id="date"
        type="date"
        min={new Date().toISOString().split("T")[0]}
        max={maxDate}
        value={formData.date}
        aria-label="Choose date"
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <label className="karla-section-title" htmlFor="time">
        Choose time
      </label>
      <select
        className="karla-card-title input"
        id="time"
        value={formData.time}
        aria-label="Choose time"
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label className="karla-section-title" htmlFor="guests">
        Number of guests
      </label>
      <input
        className="karla-card-title input"
        id="guests"
        type="number"
        min="1"
        max="10"
        placeholder="1"
        aria-label="Number of guests"
        value={formData.guests}
        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
      />
      <label className="karla-section-title" htmlFor="occasion">
        Occasion
      </label>
      <select
        className="karla-card-title input"
        id="occasion"
        aria-label="Occasion"
        value={formData.occasion}
        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
      >
        <option>Other</option>
        <option>Birthday</option>
        <option>Bussines</option>
      </select>
      <label className="karla-section-title" htmlFor="name">
        Your Name
      </label>
      <input
        className="karla-card-title input"
        id="name"
        type="text"
        placeholder="Name"
        value={formData.name}
        required
        aria-label="Your Name"
        minLength={3}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        className="primary-button karla-paragraph"
        type="submit"
        aria-label="submit"
        value="Make Your reservation"
      />
    </form>
  );
}
