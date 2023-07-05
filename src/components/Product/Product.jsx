import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/action-store";
import { getProfile } from "../../redux/actions/getProfile";
import style from "./Product.module.css";
import { useNavigate } from "react-router-dom";
const Product = ({ id, name, description, price, image, stock }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.userProfile);

  const userId = user?.id;

  const handleAddToCart = (productId) => {
    console.log(userId, productId, "DISPATCH");
    dispatch(addToCart(userId, productId));
    navigate("/cart")
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  console.log(userId, "VER PREVIO DISPATCH");

  return (
    <div className={style.productCard}>
      <img src={image} alt={name} className={style.productImg} />
      <div className={style.productText}>
        <h2 className={style.productName}>{name}</h2>
        <p className={style.productDesc}>{description}</p>
        <p className={style.productDesc}>{stock} left in stock</p>
        <p>Price: ${price}</p>
          </div>
        {stock > 0 ? (
          <button onClick={() => handleAddToCart(id)} className={style.button}>Add to Cart</button>
        ) : (
          <p>Out of Stock</p>
        )}
    </div>
  );
};

export default Product;
