import {
   NEWS,
  } from "../actions/actions-type";
  
  const intialNewsState = {
    news: []
  };
  
  const newsReducer = (state = intialNewsState, action) => {
    switch (action.type) {
      case NEWS:
        return { ...state, news: action.payload };
  
     
  
      default:
        return state;
    }
  };
  
  export default newsReducer;