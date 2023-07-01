
import {
    GET_PRODUCTS,
    GET_PRODUCTSID,
    CREATE_PRODUCT,
    
  } from '../actions/actions-type';
  
  const initialState = {
    products: [],
    product: {},
    cratesProducts: [],
    cart: [],
    loading: false,
    error: null
  };
  
  const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
      return { ...state, products: action.payload };
      case GET_PRODUCTSID:
      return { ...state, product: action.payload };
      case CREATE_PRODUCT:
      return { ...state, createsProducts: action.payload };
      
      
      
   
      default:
        return state;
    }
  };
  

  export default storeReducer;
  

