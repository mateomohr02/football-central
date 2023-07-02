import {
    GET_PRODUCTS,
    GET_PRODUCTSID,
    CREATE_PRODUCT,
    ADD_PRODUCT_CART,
    GET_PRODUCT_CART
  } from '../actions/actions-type';
  
  const initialState = {
    products: [],
    product: {},
    cratesProducts: [],
    cart: [],
    createsCart:[],
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
      case ADD_PRODUCT_CART:
      return { ...state, createsCart: action.payload };
      case GET_PRODUCT_CART:
      return { ...state, cart: action.payload };
      
      
      
     
      default:
        return state;
    }
  };
  
  export default storeReducer;
  
