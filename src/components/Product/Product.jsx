import React, { useEffect, useState } from "react";


const Product = ({ id,name,description,price,stock }) => {
  

  return (
   <div>
    <h2>{name}</h2>
    <p>{description}</p>
    <h3>DISPONIBLES: {stock}</h3>
    <h2>PRECIO:{price}</h2>


   </div>
  );
};

export default Product;

