import { GET_STANDINGS_LEAGUE, RESET_STANDINGS } from "../actions/actions-type";

const intialStandingState = {
  standings: [],
};

const standingsReducer = (state = intialStandingState, action) => {
  switch (action.type) {
    case RESET_STANDINGS:
      return { ...state, standings: action.payload };

    case GET_STANDINGS_LEAGUE:
      return { ...state, standings: action.payload };

    default:
      return state;
  }
};

export default standingsReducer