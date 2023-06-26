import {
  FILTER_TEAMS,
  FILTER_TEAMSBYCOUNTRY,
  GET_DETAIL_TEAM,
  GET_TEAM_BY_NAME,
  RESET_DETAIL_TEAM,
  RESET_SHOWED_TEAMS,
  SEARCH_TEAM_LEAGUE,
  TEAMS,
} from "../actions/actions-type";

const initialTeamState = {
  teams: [],
  showedTeams: [],
  detailTeam: [],
  team: [],
  teams_filter: [],
  team_filter_combinados: [],
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
    case FILTER_TEAMSBYCOUNTRY: {
      const teams = state.teams;
      const filterByCountry =
        action.payload === "All"
          ? []
          : teams.filter((team) => team.country_id === action.payload);

      return {
        ...state,
        teams_filter_combinados: filterByCountry,
      };
    }

    case FILTER_TEAMS: {
      if (action.payload === "A") {
        return {
          ...state,
          teams_filter: [...state.teams_filter].sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
          teams_filter_combinados: [...state.team_filter_combinados].sort(
            (a, b) => a.name.localeCompare(b.name)
          ),
        };
      } else {
        return {
          ...state,
          teams_filter: [...state.teams_filter].sort(
            (a, b) => -1 * a.name.localeCompare(b.name)
          ),
          team_filter_combinados: [...state.team_filter_combinados].sort(
            (a, b) => -1 * a.name.localeCompare(b.name)
          ),
        };
      }
    }

    case TEAMS:
      return { ...state, teams_filter: action.payload };
    default:
      return state;
  }
};

export default teamReducer;
