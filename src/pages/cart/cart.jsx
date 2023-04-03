/* eslint-disable array-callback-return */
import React, { useContext } from 'react';
import { ProductContext } from '../../context/product-context';
import { CartItem } from './cart-item';
import './cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { products, cartItems, getTotalAmount } = useContext(ProductContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {products.map((product) => {
          if (cartItems[product.id]) {
            return (
              <CartItem
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
              />
            );
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className='checkout'>
          <h3>Total: €{totalAmount}</h3>
          <button className='cart-checkout' onClick={() => navigate('/')}>
            Continue Shopping
          </button>
          <button className='cart-checkout' onClick={() => navigate('/order')}>
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};
