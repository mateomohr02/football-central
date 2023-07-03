import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/action-store';
import { getProfile } from '../../redux/actions/getProfile';

const Product = ({ id, name, description, price, image, stock }) => {
  const dispatch = useDispatch();
  
  const user = useSelector(state => state.user.userProfile)

  const userId = user?.id

  const handleAddToCart = (productId) => {
    console.log(userId, productId, 'DISPATCH');
    dispatch(addToCart(userId, productId));
  };

  useEffect(()=>{
    dispatch(getProfile())
  }, [dispatch])

  console.log(userId, 'VER PREVIO DISPATCH');

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
