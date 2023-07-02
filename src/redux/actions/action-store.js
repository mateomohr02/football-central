import axios from 'axios';
import {
 GET_PRODUCTS,
 GET_PRODUCTSID,
 CREATE_PRODUCT,
  } from './actions-type';
  



  export const fetchProducts = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/Store/products');
        const products = response.data;
  
        dispatch({ type: 'GET_PRODUCTS', payload: products });
        console.log('Products fetched:', products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  };
  
  export const fetchProductById = (productId) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:3001/Store/products/${productId}`);
        const product = response.data;
  
        dispatch({ type: 'GET_PRODUCTSID', payload: product });
        console.log('Product fetched:', product);
      } catch (error) {
        dispatch({ type: 'FETCH_PRODUCT_FAILURE', payload: error.message });
        console.error('Error fetching product:', error);
      }
    };
  };
  
  export const createProduct = (productData) => {
    return async (dispatch) => {
      
  
      try {
        const response = await axios.post('http://localhost:3001/Store/products', productData);
        const createdProduct = response.data;
  
        dispatch({ type: 'CREATE_PRODUCT', payload: createdProduct });
        console.log('Product created:', createdProduct);
      } catch (error) {
       console.log("erorr pipi")
      }
    };
  };

export const fetchCart = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/Store/cart/items');
        const cart = response.data;
  
        dispatch({ type: 'GET_PRODUCT_CART', payload: cart });
        console.log('Products fetched:', cart);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  };


  export const addToCart = (userId, productId) => {
    return async (dispatch) => {
      try {
        const payload = { userId, productId };
        const response = await axios.post('/cart/add', payload);
        const createdCart = response.data;
  
        dispatch({ type: 'ADD_PRODUCT_CART', payload: createdCart });
        console.log('Product created:', createdCart);
      } catch (error) {
        console.log('Error adding product to cart:', error);
        // Manejo del error...
      }
    };
  };
  
 
  
  
