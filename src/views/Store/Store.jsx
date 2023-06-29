import React, { useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Cart from '../../components/Cart/Cart';

const Store = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const products = [];

    return(
        <div>
            <h1>TIENDA</h1>
            <ProductList products={products} addToCart={addToCart} />
            <Cart cartItems={cartItems} />
        </div>
    );
};

export default Store;