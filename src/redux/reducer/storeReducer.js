import {
  GET_PRODUCTS,
  GET_PRODUCTSID,
  CREATE_PRODUCT,
  ADD_PRODUCT_CART,
  GET_PRODUCT_CART,
  POST_NEW_PRODUCT,
} from "../actions/actions-type";

const initialState = {
  products: [],
  product: {},
  cratesProducts: [],
  cart: [],
  createsCart: [],
  loading: false,
  error: null,
  newProduct: false,
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
      const newCart = state.cart.Products.push();
      return { ...state, cart: newCart };
    case GET_PRODUCT_CART:
      return { ...state, cart: action.payload };
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case POST_NEW_PRODUCT:
      return {
        ...state,
        newProduct: true,
      };

    case "RESET_NEW_PRODUCT":
      return {
        ...state,
        newProduct: false,
      };
    case "GET_CART_USER":
      return {
        ...state,
        cart: action.payload,
      };
    case "RESET_CART_STATE":
      return {
        ...state,
        cart: [],
      };
    case "DELETE_ITEM_CART":
      const filteredCart = state.cart;

      return {
        ...state,
        cart: filteredCart,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default storeReducer;
