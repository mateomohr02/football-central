import { GET_VENUE_BY_ID, RESET_VENUE } from "../actions/actions-type";

const intialVenueState = {
  venue: {},
};

const venueReducer = (state = intialVenueState, action) => {
  switch (action.type) {
    case RESET_VENUE:
      return { ...state, venue: action.payload };

    case GET_VENUE_BY_ID:
      return { ...state, venue: action.payload };

    default:
      return state;
  }
};

export default venueReducer;