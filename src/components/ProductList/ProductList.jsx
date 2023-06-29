import React from 'react';
import Product from '../Product/Product';

const ProductList = ({ products, addToCart }) => {
    return(
        <div>
            {products.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    onAddToCart={() => addToCart(product)}
                />    
            ))}
        </div>
    );
};

export default ProductList;