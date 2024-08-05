import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu karla-highlight">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">About</li>
        <li className="navbar-item">Menu</li>
        <li className="navbar-item">
          <Link to="/reservations">Reservations</Link>
        </li>
        <li className="navbar-item">Order Online</li>
        <li className="navbar-item">Login</li>
      </ul>
    </nav>
  );
}
