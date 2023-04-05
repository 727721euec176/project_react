import React from 'react';
import BarcodeGenerator from './BarcodeGenerator';

function Product({ product }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <BarcodeGenerator value={product.id} />
    </div>
  );
}

export default Product;
