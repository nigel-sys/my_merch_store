import React from 'react';
import { useState, useEffect } from 'react';

export const ProductContext = React.createContext(null);

export const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

    fetch(
      'https://ts1xl5lhi5.execute-api.us-east-1.amazonaws.com/dev/Inventory',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (id) => {
    setCartItems((prevCart) => {
      const updatedCartItems = {
        ...prevCart,
        [id]: (prevCart[id] || 0) + 1, // increment the quantity for the item with the given id
      };
      return updatedCartItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => {
      const updatedCartItems = {
        ...prevCart,
        [id]: (prevCart[id] || 0) - 1, // decrement the quantity for the item with the given id
      };
      if (updatedCartItems[id] <= 0) {
        delete updatedCartItems[id]; // remove the item if the quantity becomes zero
      }
      return updatedCartItems;
    });
  };

  const updatedCartItems = (id, quantity) => {
    setCartItems((prevCart) => {
      const updatedCartItems = {
        ...prevCart,
        [id]: quantity,
      };
      return updatedCartItems;
    });
  };

  const deleteFromCart = (id) => {
    setCartItems((prevCart) => {
      const updatedCartItems = {
        ...prevCart,
        [id]: 0,
      };
      return updatedCartItems;
    });
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      let itemInfo = products.find((product) => product.id === Number(item));
      totalAmount += cartItems[item] * itemInfo.price;
    }
    return totalAmount;
  };

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    updatedCartItems,
    getTotalAmount,
    deleteFromCart,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};
