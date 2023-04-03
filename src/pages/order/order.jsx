import React, { useContext } from 'react';
import { ProductContext } from '../../context/product-context';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';

export const Order = () => {
  const navigate = useNavigate();

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '0.01',
          },
        },
      ],
    });
  };

  const { accessToken, products, cartItems } = useContext(ProductContext);

  const updateInventory = async () => {
    try {
      const promises = products.map((product) => {
        if (cartItems[product.id]) {
          console.log(cartItems[product.id]);
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
    } catch (error) {
      console.log(error);
    }
  };

  const onApprove = async (data, actions) => {
    await actions.order.capture();
    await updateInventory().then(() => navigate('/confirmation'));
  };

  return (
    <div>
      <h1>Select payment method</h1>
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        options={{
          clientId:
            'AVd6V55mEEw22lFnGgBCS1R5Tzipo9SbEXak7wPy-2_ClJgcvVdi9eNKQ5iRFsp6880LzHjcPCeTI0VD',
          currency: 'USD',
          intent: 'capture',
        }}
      />
    </div>
  );
};
