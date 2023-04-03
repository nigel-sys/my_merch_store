import React from 'react';

export const OrderConfirmation = () => {
  //   const handleOrder = async () => {
  //     try {
  //       const promises = products.map((product) => {
  //         if (cartItems[product.id]) {
  //           const updatedQuantity = product.quantity - cartItems[product.id];
  //           return fetch(
  //             `https://ts1xl5lhi5.execute-api.us-east-1.amazonaws.com/dev/Inventory/${product.id}`,
  //             {
  //               method: 'PUT',
  //               headers: {
  //                 Authorization: `Bearer ${accessToken}`,
  //                 'Content-Type': 'application/json',
  //               },
  //               body: JSON.stringify({ quantity: updatedQuantity }),
  //             }
  //           );
  //         } else {
  //           return product;
  //         }
  //       });

  //       await Promise.all(promises);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Thank you for your purchase!</p>
    </div>
  );
};
