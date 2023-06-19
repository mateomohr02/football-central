import axios from "axios";
import { GET_DETAIL_TEAM } from "./actions-type";

export const getDetailTeam = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/team/${id}`);
      const data = response.data;
      dispatch({ type: GET_DETAIL_TEAM, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};
