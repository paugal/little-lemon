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
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="navbar-item">
          <Link to="/reservations">Reservations</Link>
        </li>
        <li className="navbar-item">
          <Link to="/order">Order Online</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
