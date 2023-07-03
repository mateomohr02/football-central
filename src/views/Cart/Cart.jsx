import React, { useEffect } from "react";
import CartItem from '../../components/CartItem/CartItem'
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {


    const cartItems = useSelector(state => state.store.cart)
    
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);


    return(
        <div>
            <h2>Cart</h2>
            {cartItems.lenght === 0 ? (
                <p>Tu carrito esta vacio</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item}/>
                    ))}
                    <p>Total: {totalPrice}</p>
                    <button>VERIFICAR</button>
                </div>
            )}
        </div>
    );
};

export default Cart;