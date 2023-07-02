import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/action-store';

const Product = ({ id, name, description, price, image, stock }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user.id); // Obtener el userId del estado

  const handleAddToCart = (productId) => {
    dispatch(addToCart(userId, productId));
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
      <img src={image} alt={name} />
      {stock > 0 ? (
        <button onClick={() => handleAddToCart(id)}>Add to Cart</button>
      ) : (
        <p>Out of Stock</p>
      )}
    </div>
  );
};

export default Product;
