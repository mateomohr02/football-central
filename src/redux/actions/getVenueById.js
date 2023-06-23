import axios from 'axios'
import { GET_VENUE_BY_ID } from "./actions-type";

export const getVenueById = (id) => {
  return async function (dispatch) {
    try {
    const response = await axios.get(`/venues/${id}`);
    const data = response.data;
    dispatch({
      type: GET_VENUE_BY_ID,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
  };
};
