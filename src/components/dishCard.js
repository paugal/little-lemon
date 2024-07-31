import React from "react";
import "../styles/dishCard.css";

export default function dishCard({ ...props }) {
  return (
    <div className="dish-card">
      <div className="dish-img">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="dish-text">
        <div className="dish-title">
          <h3 className="karla-card-title">{props.name}</h3>
          <p className="karla-highlight price">{props.price}</p>
        </div>
        <div className="dish-description karla-paragraph">
          {props.description}
        </div>
        <div className="dish-order karla-highlight ">
          <p>Order a delivery</p>
        </div>
      </div>
    </div>
  );
}
