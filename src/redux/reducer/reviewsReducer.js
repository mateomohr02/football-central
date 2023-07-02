import {
    POST_REVIEWS,
    GET_REVIEWS,
  } from "../actions/actions-type";
  
  const initialTeamState = {
    reviews:[],
    createreviews:[],
    reviewMessage: ''
  };
  
  const teamReducer = (state = initialTeamState, action) => {
    switch (action.type) {
      case POST_REVIEWS:
        return { ...state, createreviews: action.payload };
  
      case GET_REVIEWS:
        return { ...state, reviews: action.payload };
      
      default:
        return state;
    }
  };
  
  export default teamReducer;