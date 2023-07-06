import axios from "axios";
import { GET_REVIEWS, POST_REVIEWS } from "./actions-type";


export const getReviews = () => { 
    return async (dispatch) => { 
      try { 
        const response = await axios.get('/Reviews'); 
   
        dispatch({ type: GET_REVIEWS, payload: response.data }); 
      } catch (error) { 
        console.log(error); 
      } 
    } 
  };


export const createReview = (newReview) => {
    return async (dispatch) => {
      try {
        const response = await axios.post("/Reviews", newReview);
        const createdReview = response.data;
  
        console.log("New review created:", createdReview);
  
        dispatch({
          type: POST_REVIEWS,
          payload: createdReview
        });
      } catch (error) {
        console.log(error);
      }
    };
  };