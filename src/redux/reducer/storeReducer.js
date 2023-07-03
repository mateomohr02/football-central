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
    error: null,
    newProduct: false
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
      return { ...state,
      cart: state.cart.push(action.payload)
      };
      case GET_PRODUCT_CART:
      return { ...state, cart: action.payload };
      case 'GET_ALL_PRODUCTS':
            return{
                ...state,
                products : action.payload
            }
        case 'POST_NEW_PRODUCT':
            return{
                ...state,
                newProduct: true
            }
        case 'RESET_NEW_PRODUCT':
            return{
                ...state,
                newProduct: false
            }
      default:
        return state;
    }
  };
  
  export default storeReducer;
  
