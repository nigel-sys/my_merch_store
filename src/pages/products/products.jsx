import React from 'react';
import './products.css';
import { ProductContext } from '../../context/product-context';
import { Product } from '../../components/product';

export const Products = () => {
  const { products } = React.useContext(ProductContext);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  if (products.length === 0) {
    return <h2>No products found</h2>;
  }

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
