import React from "react";
import "../styles/dishCard.css";

export default function dishCard({ ...props }) {
  return (
    <div class="dish-card">
      <div class="dish-img">
        <img src={props.img} alt={props.name} />
      </div>
      <div class="dish-text">
        <div class="dish-title">
          <h3 className="karla-card-title">{props.name}</h3>
          <p className="karla-highlight price">{props.price}</p>
        </div>
        <div class="dish-description karla-paragraph">{props.description}</div>
        <div class="dish-order karla-highlight ">
          <p>Order a delivery</p>
        </div>
      </div>
    </div>
  );
}
