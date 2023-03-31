import React, { useContext } from 'react';
import './product.css';
import { ProductContext } from '../context/product-context';

export const Product = (props) => {
  const { addToCart, cartItems } = useContext(ProductContext);

  let cartItemAmount = cartItems[props.id];

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{props.name}</h5>
        <p className='card-text'>${props.price}</p>
        <p className='card-text'>{props.quantity}</p>
        <button className='card-button' onClick={() => addToCart(props.id)}>
          Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};
