const intialStoreState = {
    products: [],
    newProduct: false
  };
  
  const storeReducer = (state = intialStoreState, action) => {
    switch (action.type) {
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