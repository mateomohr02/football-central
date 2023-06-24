import axios from "axios";
import { GET_TEAM_BY_NAME } from "./actions-type";

export const getTeamByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/team/search/${name}`);
      const data = response.data;
      dispatch({
        type:GET_TEAM_BY_NAME,
        payload:data
      })
    } catch (error) {
      console.log(error.message);
    }
  };
};
