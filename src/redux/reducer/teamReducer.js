import {
  GET_DETAIL_TEAM,
  GET_TEAM_BY_NAME,
  RESET_DETAIL_TEAM,
  RESET_SHOWED_TEAMS,
  SEARCH_TEAM_LEAGUE,
} from "../actions/actions-type";

const initialTeamState = {
  teams: [],
  showedTeams: [],
  detailTeam: [],
  team: [],
};

const teamReducer = (state = initialTeamState, action) => {
  switch (action.type) {
    case SEARCH_TEAM_LEAGUE:
      return { ...state, showedTeams: action.payload };

    case RESET_SHOWED_TEAMS:
      return { ...state, showedTeams: action.payload };

    case RESET_DETAIL_TEAM:
      return { ...state, detailTeam: action.payload };

    case GET_DETAIL_TEAM:
      return { ...state, detailTeam: action.payload };

    case GET_TEAM_BY_NAME:
      return {
        ...state,
        team: action.payload,
      };
    default:
      return state;
  }
};

export default teamReducer;
