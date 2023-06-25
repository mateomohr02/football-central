import axios from "axios";
import { GET_LIVESCORES_INPLAY } from "../actions/actions-type";

export const getLivescores = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/livescore");
      const data = response.data;
      dispatch({ type: GET_LIVESCORES_INPLAY, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};
