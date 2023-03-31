import React from 'react';

export const Cart = ({ cartItems, setCartItems }) => {
  return (
    <div className='container'>
      <h1>Your Cart</h1>
      <div className='row'>
        <div className='col-md-8'>
          {cartItems.length === 0 && <p>Your cart is empty.</p>}
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <input type='number' value={item.quantity} />
              <button>Remove Item</button>
            </div>
          ))}
        </div>
        <div className='col-md-4'>
          <h3>Total: </h3>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};
