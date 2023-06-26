import {
  DETAIL_CUP,
  DETAIL_LEAGUE,
  GET_LEAGUES_COUNTRY,
  RESET_CUP_DETAIL,
  RESET_LEAGUES_COUNTRY,
  RESET_LEAGUE_DETAIL,
} from "../actions/actions-type";

const initialLeagueCupState = {
  leagues: [],
  showedLeagues: [],
  detailLeague: [],
  detailCup: [],
  countryLeagues: [],
};

const leagueCupReducer = (state = initialLeagueCupState, action) => {
  switch (action.type) {
    case DETAIL_LEAGUE:
      return { ...state, detailLeague: action.payload };

    case DETAIL_CUP:
      return { ...state, detailCup: action.payload };

    case GET_LEAGUES_COUNTRY:
      return { ...state, countryLeagues: action.payload };

    case RESET_LEAGUES_COUNTRY:
      return { ...state, countryLeagues: action.payload };

    case RESET_LEAGUE_DETAIL:
      return { ...state, detailLeague: action.payload };

    case RESET_CUP_DETAIL:
      return { ...state, detailCup: action.payload };
    default:
      return state;
  }
};

export default leagueCupReducer;
