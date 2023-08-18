// src/PriceCard.js
import React from 'react';
import './PriceCard.css';

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="price-card">
      <h2 className="title">{title}</h2>
      <p className="price">${price} / month</p>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

export default PriceCard;
