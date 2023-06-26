import {
  GET_FIXTURE_TODAY,
  GET_FIXTURE_BY_DATE_RANGE,
  GET_DETAIL_TEAM,
  GET_VENUE_BY_ID,
  GET_PLAYER_BY_ID,
  GET_LIVESCORES,
  RESET_LIVESCORES,
  GET_TEAM_BY_NAME,
  LOGIN,
  REGISTER,
  LOGOUT,
  PREMIUM,
  GET_PROFILE,
  UPDATE_USER_PROFILE,
  SEARCH_TEAM_LEAGUE,
  DETAIL_LEAGUE,
  DETAIL_CUP,
  GET_LEAGUES_COUNTRY,
  RESET_LEAGUES_COUNTRY,
  RESET_LEAGUE_DETAIL,
  RESET_CUP_DETAIL,
  GET_STANDINGS_LEAGUE,
  RESET_STANDINGS,
  RESET_SHOWED_TEAMS,
  RESET_DETAIL_TEAM,
  RESET_VENUE,
} from "../actions/actions-type";

const initialState = {
  nations: [],
  leagues: [],
  teams: [],
  showedLeagues: [],
  showedTeams: [],
  detailLeague: [],
  standings: [],
  detailCup: [],
  detailTeam: [],
  countryLeagues: [],
  fixtureToday: [],
  fixtureByDateRange: [],
  venue: {},
  player: {},
  livescores: [],
  team: [],
  registeredUser: {},
  isAuthenticated: false,
  isPremium: false,
  user: {},
  userProfile: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TEAM_LEAGUE:
      return { ...state, showedTeams: action.payload };
    //--------------------DETAIL--------------------------------------------------------------------------------------------------------
    case DETAIL_LEAGUE:
      return { ...state, detailLeague: action.payload };

    case DETAIL_CUP:
      return { ...state, detailCup: action.payload };

    ////--------------------GET--------------------------------------------------------------------------------------------------------
    case GET_LEAGUES_COUNTRY:
      return { ...state, countryLeagues: action.payload };

    //--------------------RESET--------------------------------------------------------------------------------------------------------
    case RESET_LEAGUES_COUNTRY:
      return { ...state, countryLeagues: action.payload };

    case RESET_LEAGUE_DETAIL:
      return { ...state, detailLeague: action.payload };

    case RESET_CUP_DETAIL:
      return { ...state, detailCup: action.payload };

    case RESET_STANDINGS:
      return { ...state, standings: action.payload };

    case RESET_SHOWED_TEAMS:
      return { ...state, showedTeams: action.payload };

    case RESET_DETAIL_TEAM:
      return { ...state, detailTeam: action.payload };

    case RESET_VENUE:
      return { ...state, venue: action.payload };

    case RESET_LIVESCORES:
      return {
        ...state,
        livescores: action.payload,
      };

    //--------------------GET--------------------------------------------------------------------------------------------------------
    case GET_STANDINGS_LEAGUE:
      return { ...state, standings: action.payload };

    case GET_PROFILE:
      console.log("DATA?", action.payload);
      console.log("DATA?", action);
      return {
        ...state,
        userProfile: action.payload,
      };

    case GET_FIXTURE_TODAY:
      return { ...state, fixtureToday: action.payload };
    case GET_FIXTURE_BY_DATE_RANGE:
      return { ...state, fixtureByDateRange: action.payload };

    case GET_DETAIL_TEAM:
      return { ...state, detailTeam: action.payload };

    case GET_VENUE_BY_ID:
      return { ...state, venue: action.payload };

    case GET_PLAYER_BY_ID:
      return { ...state, player: action.payload };

    case GET_LIVESCORES:
      return {
        ...state,
        livescores: action.payload,
      };

    case GET_TEAM_BY_NAME:
      return {
        ...state,
        team: action.payload,
      };

    //--------------------USER--------------------------------------------------------------------------------------------------------
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case REGISTER:
      return {
        ...state,
        registeredUser: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case UPDATE_USER_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username,
        },
      };

    case PREMIUM:
      return {
        ...state,
        isPremium: true,
      };
    default:
      return state;
  }
};

export default reducer;
