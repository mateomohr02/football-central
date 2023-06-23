import axios from "axios";
import { GET_PLAYER_BY_ID } from "./actions-type";

export const getPlayerById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/players/${id}`);
      const data = response.data;
      dispatch({
        type: GET_PLAYER_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
