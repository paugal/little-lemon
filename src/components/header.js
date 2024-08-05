import React from "react";
import logo from "../assets/Logo.svg";
import "../styles/header.css";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </header>
    </div>
  );
}
