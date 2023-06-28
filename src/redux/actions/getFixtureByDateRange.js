import { GET_FIXTURE_BY_DATE_RANGE } from "./actions-type";
import axios from "axios";
import moment from "moment";
export const getFixtureByDateRange = (startDate, endDate) => {
  return async function (dispatch) {
  
    const today = moment().format("YYYY-MM-DD");// Obtener la fecha actual
    const dayAfterTomorrow = moment().add(2, "days").format("YYYY-MM-DD"); // Obtener la fecha de pasado mañana

    startDate = startDate || today; //si no se pasa parametros, se asigna today a startDate
    endDate = endDate || dayAfterTomorrow;//si no se pasa parametros, se asigna dayAfterTomorrow a endDate

    const apiData = await axios.get(
      `/fixture/dates/${startDate}/${endDate}`
    );
    const fixtureByDateRange = apiData.data;
    dispatch({
      type: GET_FIXTURE_BY_DATE_RANGE,
      payload: fixtureByDateRange,
    });
  };
};
