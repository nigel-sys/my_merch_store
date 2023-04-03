/* eslint-disable array-callback-return */
import React, { useContext } from 'react';
import { ProductContext } from '../../context/product-context';
import { CartItem } from './cart-item';
import './cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { accessToken, products, cartItems, getTotalAmount } =
    useContext(ProductContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  const handleOrder = async () => {
    try {
      const promises = products.map((product) => {
        if (cartItems[product.id]) {
          const updatedQuantity = product.quantity - cartItems[product.id];
          return fetch(
            `https://ts1xl5lhi5.execute-api.us-east-1.amazonaws.com/dev/Inventory/${product.id}`,
            {
              method: 'PUT',
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ quantity: updatedQuantity }),
            }
          );
        } else {
          return product;
        }
      });

      await Promise.all(promises);
      navigate('/acknowledgement');
    } catch (error) {
      console.log(error);
    }
  };

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
          <button className='cart-checkout' onClick={handleOrder}>
            Order
          </button>
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};
