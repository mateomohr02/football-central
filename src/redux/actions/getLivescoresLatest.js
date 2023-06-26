import axios from "axios";
import { GET_LIVESCORES_LATEST } from "./actions-type";

export const getLivescoresLatest = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/livescore/latest");
      const data = response.data;
      console.log('la data',data)
      dispatch({
        type: GET_LIVESCORES_LATEST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
