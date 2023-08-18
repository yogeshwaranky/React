import React, { useState } from 'react';

const productsData = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', description: 'Description for Product 3' },
  // Add more products here
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
    }
  };
  
  const removeFromCart = (product) => {
    setCart(cart.filter(item => item !== product));
  };
  
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="products-list">
        {productsData.map(product => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            {cart.includes(product) ? (
              <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
            ) : (
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
