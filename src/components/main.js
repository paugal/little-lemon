import React from "react";
import "../styles/main.css";
import bannerImg from "../assets/restauranfood.jpg";
import salad from "../assets/greek salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";
import DishCard from "./dishCard";

export default function main() {
  return (
    <main className="landing-page">
      <div class="banner">
        <div className="banner-container">
          <div class="banner-text">
            <h1 className="markazi-display-title">Little Lemon</h1>
            <h2 className="markazi-sub-title">Barcelona</h2>
            <p className="karla-lead-text">
              We are a family owned Mediterranean restaurant, focused on
              traditional recepis served with a modern twist
            </p>
            <button className="primary-button karla-specials">
              {" "}
              Reserve a Table
            </button>
          </div>
          <div class="banner-image">
            <img src={bannerImg} alt="bannerImage" />
          </div>
        </div>
      </div>
      <div class="week-specials">
        <div className="week-specials-container">
          <div class="title-week-specials">
            <h1 className="markazi-display-title"> This weeks specials!</h1>
            <button className="primary-button karla-specials">
              Online Menu
            </button>
          </div>
          <div class="weeks-specials-details">
            <DishCard
              img={salad}
              name="Greek Salad"
              price="12,99€"
              description="The famous greek salad of crispy lettuce, pappers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"
            />
            <DishCard
              img={bruchetta}
              name="Bruchetta"
              price="5,99€"
              description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil"
            />
            <DishCard
              img={lemonDessert}
              name="Lemon Dessert"
              price="5,00€"
              description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
