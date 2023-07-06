import axios from 'axios';
import {
 GET_PRODUCTS,
 GET_PRODUCTSID,
 CREATE_PRODUCT,
  } from './actions-type';
  



  export const fetchProducts = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('/Store/products');
        const products = response.data;
        const sortedProducts = [...products].sort((a, b) => b.id - a.id)
  
        dispatch({ type: 'GET_PRODUCTS', payload: sortedProducts });
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  };
  
  export const fetchProductById = (productId) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`/Store/products/${productId}`);
        const product = response.data;
  
        dispatch({ type: 'GET_PRODUCTSID', payload: product });
        
      } catch (error) {
        dispatch({ type: 'FETCH_PRODUCT_FAILURE', payload: error.message });
        console.error('Error fetching product:', error);
      }
    };
  };
  
  export const createProduct = (productData) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('/Store/products', productData);
        const createdProduct = response.data;
  
        dispatch({ type: 'CREATE_PRODUCT', payload: createdProduct });
      } catch (error) {
       console.log("erorr pipi")
      }
    };
  };

  export const addToCart = (userId, productId) => {
    return async (dispatch) => {
      try {
        const payload = { userId, productId };
        const response = await axios.put('/Store/cart/add', payload);
        const data = response.data
        //dispatch({ type: 'ADD_PRODUCT_CART', payload: payload });
        
      } catch (error) {
        console.log('Error adding product to cart:', error);
        // Manejo del error...
      }
    };
  };

  export const getCartbyUserId = (userId) => {
    return async (dispatch) => {

      const response = await axios.get(`/Store/cart/items/${userId}`)//req al back: búsqueda de cart por userId
      const cart = response.data

      dispatch({
        type: 'GET_CART_USER',
        payload: cart
      })
    }
  }

  export const resetCartState = () => {
    return async (dispatch) => {
        dispatch({
          type:'RESET_CART_STATE',
        }) 
    }
  }

  export const deleteItemCart = (userId,productId) => {
    return async (dispatch) => {
      const payload = {userId, productId}
      const response = await axios.put(`/Store/cart/delete`, payload)
      dispatch({
        type: 'DELETE_ITEM_CART'
      })
    }
  }

export const clearCart = (userId) => {
  return async (dispatch) => {
    const response = await axios.delete(`/Store/cart/empty/${userId}`)
    //Requ al endpoint back
    dispatch({
      type: 'CLEAR_CART'
    })

  }
}
  
 
  
  
