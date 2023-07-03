import React, { useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Cart from '../../components/Cart/Cart';
import { useNavigate } from 'react-router-dom';

const Store = () => {

    const navigate = useNavigate()

    return(
        <div>
            <h1>TIENDA</h1>
            <ProductList/>

            <button onClick={()=>navigate('/cart')}>Ver Carrito</button>
            
        </div>
    );
};

export default Store;