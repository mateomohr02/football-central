import React from "react";

const CartItem = ({ item }) => {
    return(
        <div>
            <h3>{item.name}</h3>
            <p>Precio: {item.price}</p>
        </div>
    );
};

export default CartItem;