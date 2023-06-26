import {
  GET_FIXTURE_BY_DATE_RANGE,
  GET_FIXTURE_TODAY,
} from "../actions/actions-type";

const intialFixtureState = {
  fixtureToday: [],
  fixtureByDateRange: [],
};

const fixtureReducer = (state = intialFixtureState, action) => {
  switch (action.type) {
    case GET_FIXTURE_TODAY:
      return { ...state, fixtureToday: action.payload };

    case GET_FIXTURE_BY_DATE_RANGE:
      return { ...state, fixtureByDateRange: action.payload };

    default:
      return state;
  }
};

export default fixtureReducer;
