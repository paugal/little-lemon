import React from "react";
import logo from "../assets/Logo.svg";
import "../styles/header.css";

export default function header() {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
      </header>
    </div>
  );
}
