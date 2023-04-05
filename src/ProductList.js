import React from 'react';
import Product from './Product';

function ProductList() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 10.99
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 19.99
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: 8.99
    }
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
