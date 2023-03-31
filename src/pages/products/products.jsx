import React from 'react';
import './products.css';
import { useEffect, useState } from 'react';
import { Product } from '../../components/product';

export const Products = () => {
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

  return (
    <div className='product-container'>
      <div className='row'>
        {products.map((product) => (
          <div className='product-card' key={product.id}>
            <Product
              id={product.id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
