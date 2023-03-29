import React from 'react';
import './product.css';

export const Product = ({ name, price, quantity }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>${price}</p>
        <p className='card-text'>{quantity}</p>
        <button className='card-button'>Add to cart</button>
      </div>
    </div>
  );
};
