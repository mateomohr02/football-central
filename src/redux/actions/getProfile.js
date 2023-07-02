import axios from "axios";
import { GET_PROFILE } from "./actions-type";

export const getProfile = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/users/userid/${id}`);
      console.log("DATA?",response.data);
      dispatch({
        type: GET_PROFILE,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
