import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/action-store';
import Product from '../Product/Product';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.store.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log("QUE CARAJOS PASA CSM", products)

  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image_path}
          stock={product.stock}
     
        />
      ))}
    </div>
  );
};

export default ProductList;


