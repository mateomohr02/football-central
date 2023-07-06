import axios from "axios";
import { GET_TEAM_BY_COUNTRY_ID } from "./actions-type";

export const getTeamByCountryId = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/team/country/${id}`);
      const data = response.data;
      dispatch({
        type: GET_TEAM_BY_COUNTRY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
