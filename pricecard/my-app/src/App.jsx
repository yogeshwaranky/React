// src/App.js
import React from 'react';
import PriceCard from './PriceCard';

const App = () => {
  const priceCardData = [
    {
      title: 'Basic Plan',
      price: 9.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Pro Plan',
      price: 19.99,
      features: ['All Basic features', 'Feature 4', 'Feature 5'],
    },
    {
      title: 'Premium Plan',
      price: 29.99,
      features: ['All Pro features', 'Feature 6', 'Feature 7'],
    },
  ];

  return (
    <div className="app">
      {priceCardData.map((data, index) => (
        <PriceCard key={index} {...data} />
      ))}
    </div>
  );
};

export default App;
