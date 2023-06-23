import { GET_FIXTURE_TODAY } from "./actions-type";
import axios from "axios";

export const getFixtureToday = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get("/fixture/today");
      const fixture = apiData.data;
      dispatch({ type: GET_FIXTURE_TODAY, payload: fixture });
    } catch (error) {
      console.log(error.message);
    }
  };
};