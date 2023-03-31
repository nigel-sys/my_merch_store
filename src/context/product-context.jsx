import React from 'react';

export const ProductContext = React.createContext(null);

export const ProductContextProvider = (props) => {
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

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};
