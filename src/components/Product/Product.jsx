import React from "react";

const Product = ({ name, price, image, onAddToCard }) => {
    return(
        <div>
            <h2>{name}</h2>
            <p>Precio: {price}</p>
            <img src={image} alt={name} />
            <button onClick={onAddToCard}>AGREGAR</button>
        </div>
    );
};

export default Product;