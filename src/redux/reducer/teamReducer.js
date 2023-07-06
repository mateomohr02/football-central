import { calculateAge } from "../../views/DetailTeam/utils";
import {
  FILTER_TEAMS,
  FILTER_TEAMSBYCOUNTRY,
  GET_DETAIL_TEAM,
  GET_TEAM_BY_COUNTRY_ID,
  GET_TEAM_BY_NAME,
  GET_TEAM_SQUAD_BY_TEAM_ID,
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
  teamByCountryId: [],
  teamSquad: [],
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
      const teams = state.teams_filter;
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
    case GET_TEAM_BY_COUNTRY_ID: {
      return {
        ...state,
        teamByCountryId: action.payload,
      };
    }
    case GET_TEAM_SQUAD_BY_TEAM_ID: {
      return {
        ...state,
        teamSquad: action.payload,
      };
    }
    case "SORT_TEAM_SQUAD_BY_LASTNAME": {
      const { orderBy } = action.payload;
      const { teamSquad } = state;

      const sortedTeamSquad = teamSquad.slice().sort((a, b) => {
        if (orderBy === "A-Z") {
          return a[0].lastname.localeCompare(b[0].lastname);
        } else if (orderBy === "Z-A") {
          return b[0].lastname.localeCompare(a[0].lastname);
        }
        return 0;
      });

      return {
        ...state,
        teamSquad: sortedTeamSquad,
      };
    }

    case "SORT_TEAM_SQUAD_BY_AGE": {
      const { orderBy } = action.payload;
      const { teamSquad } = state;
    
      const sortedTeamSquad = teamSquad.slice().sort((a, b) => {
        const ageA = calculateAge(a[0].date_of_birth);
        const ageB = calculateAge(b[0].date_of_birth);
        if (orderBy === "Youngest") {
          return ageA - ageB;
        } else if (orderBy === "Oldest") {
          return ageB - ageA;
        }
        return 0;
      });
    
      return {
        ...state,
        teamSquad: sortedTeamSquad,
      };
    }
    case "RESET_TEAM_SQUAD":{
      return{
        ...state,
        teamSquad:[]
      }
    }
    case "RESET_DETAIL_TEAM":{
      return{
        ...state,
        detailTeam:action.payload
      }
    }

    
    default:
      return state;
  }
};

export default teamReducer;
