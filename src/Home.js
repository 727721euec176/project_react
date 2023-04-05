import React from 'react';
import ProductList from '../components/ProductList';

function Home() {
  return (
    <main>
      <h2>Welcome to My React App</h2>
      <p>Check out our latest products:</p>
      <ProductList />
    </main>
  );
}

export default Home;
