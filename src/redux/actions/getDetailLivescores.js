import { GET_DETAIL_LIVESCORES } from "./actions-type";
import axios from "axios";


export const getDetailLivescores = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "http://localhost:3001/livescore/latest"
      );
      const data = response.data;
      console.log("la data de detail livescore desde action", data);
      dispatch({
        type: GET_DETAIL_LIVESCORES,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
