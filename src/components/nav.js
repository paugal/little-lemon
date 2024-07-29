import React from "react";
import "../styles/nav.css";

export default function nav() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu karla-highlight">
        <li className="navbar-item">
          <a href="#home">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#about">About</a>
        </li>
        <li className="navbar-item">
          <a href="#services">Menu</a>
        </li>
        <li className="navbar-item">
          <a href="#contact">Reservations</a>
        </li>
        <li className="navbar-item">
          <a href="#contact">Order Online</a>
        </li>
        <li className="navbar-item">
          <a href="#contact">Login</a>
        </li>
      </ul>
    </nav>
  );
}
