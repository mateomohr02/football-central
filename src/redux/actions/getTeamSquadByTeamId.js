import axios from "axios";
import { GET_TEAM_SQUAD_BY_TEAM_ID } from "./actions-type";

export const getTeamSquadByTeamId = (ids) => {
  return async function (dispatch) {
    try {
      const requests = ids?.map((id) => {
        return axios.get(`/players/${id}`);
      });

      const responses = await Promise.all(requests);
      const data = responses.map((response) => response.data);

      console.log("que carajos devolves",data); // Agrega este console.log para ver la información devuelta

      dispatch({
        type: GET_TEAM_SQUAD_BY_TEAM_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

