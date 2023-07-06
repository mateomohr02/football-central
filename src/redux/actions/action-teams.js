import axios from "axios";

export function getTeams() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/team");
      const teams = response.data;
        console.log(teams)
      dispatch({
        type: "TEAMS",
        payload: teams,
      });
    } catch (error) {
      // Manejo de errores en caso de que la solicitud falle
      console.log(error);
    }
  };
}

export function getTeamsNational() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/team");
      const teams = response.data;
      console.log(teams);
      
      const nationalTeams = teams.filter(team => team.type === "national");
      console.log("naciones",nationalTeams)
      dispatch({
        type: "TEAMS",
        payload: nationalTeams,
      });
    } catch (error) {
      // Manejo de errores en caso de que la solicitud falle
      console.log(error);
    }
  };
}
