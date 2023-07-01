import axios from "axios";
import { GET_TEAM_SQUAD_BY_TEAM_ID } from "./actions-type";

export const getTeamSquadByTeamId = (ids) => {
  return async function (dispatch) {
    try {
      const idArray = ids;
      console.log('id array',idArray)
      const requests = ids.map((id) => axios.get(`/players/${id}`));
      const responses = await Promise.all(requests);
      const data = responses.map((response) => response.data);
      dispatch({
        type: GET_TEAM_SQUAD_BY_TEAM_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
