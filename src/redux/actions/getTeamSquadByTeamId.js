import axios from "axios";
import { GET_TEAM_SQUAD_BY_TEAM_ID } from "./actions-type";

export const getTeamSquadByTeamId = (ids) => {
  return async function (dispatch) {
    try {
      const requests = ids.map((id) => {
        return axios.get(`/players/${id}`);
      });

      const responses = await Promise.allSettled(requests);
      const data = responses
        .filter((response) => response.status === "fulfilled")
        .map((response) => response.value.data);

      dispatch({
        type: GET_TEAM_SQUAD_BY_TEAM_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};