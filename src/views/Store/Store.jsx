import React, { useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Cart from '../../components/Cart/Cart';
import { useNavigate } from 'react-router-dom';
import style from './store.module.css';

const Store = () => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <h1 className={style.tienda}>TIENDA</h1>
      <button onClick={() => navigate('/cart')} className={style.carrito}>Ver Carrito</button>
      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default Store;
