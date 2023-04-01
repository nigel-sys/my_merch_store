import React, { useContext } from 'react';
import './cart-item.css';
import { ProductContext } from '../../context/product-context';

export const CartItem = (props) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updatedCartItems,
    deleteFromCart,
  } = useContext(ProductContext);

  return (
    <div className='cart-item'>
      <div className='item-details'>
        <h3>{props.name}</h3>
        <p>${props.price}</p>
        <div className='quantity-control'>
          <button onClick={() => removeFromCart(props.id)}>-</button>
          <input
            type='number'
            min='1'
            value={cartItems[props.id]}
            onChange={(e) => updatedCartItems(props.id, Number(e.target.value))}
          />
          <button onClick={() => addToCart(props.id)}>+</button>
        </div>
      </div>
      <div className='item-actions'>
        <button onClick={() => deleteFromCart(props.id)}>Remove</button>
      </div>
    </div>
  );
};
