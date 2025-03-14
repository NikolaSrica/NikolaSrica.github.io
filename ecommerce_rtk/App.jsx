// App.js
import React from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import './App.css'
import SuperCoin from '../../ecommerce_rtk/src/Components/SuperCoin'
const App = () => {
  return (

      <div>
        <h1 className='app-heading'>E-Commerce Application</h1>
        <ProductList />
        <ShoppingCart />
        <SuperCoin />
      </div>

  );
};

export default App;
