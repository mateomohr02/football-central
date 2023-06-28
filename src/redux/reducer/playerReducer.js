import { GET_PLAYER_BY_ID, FILTER_PLAYERSBYCOUNTRY, FILTER_PLAYERSBYTEAM, FILTER_PLAYERSBYHEIGHT } from "../actions/actions-type";

const initialPlayerState = {
  player: {},
  player_filter_country: [],
  player_filter_team: [],
  player_filter_height: []
};

const playerReducer = (state = initialPlayerState, action) => {
  switch (action.type) {
    case GET_PLAYER_BY_ID:
      return { ...state, player: action.payload };
    case FILTER_PLAYERSBYCOUNTRY: {
      const players = state.player;
      const filterByCountry =
        action.payload === "All"
          ? []
          : players.filter(player => player.country_id === action.payload);
      return {
        ...state,
        player_filter_country: filterByCountry
      }
    } 
    case FILTER_PLAYERSBYTEAM: {
      if (action.payload === "A") {
        return {
          ...state,
          player: [...state.player].sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
          player_filter_team: [...state.player_filter_team].sort(
            (a, b) => a.name.localeCompare(b.name)
          ),
        };
      } else {
        return {
          ...state,
          player: [...state.player].sort(
            (a, b) => -1 * a.name.localeCompare(b.name)
          ),
          player_filter_team: [...state.player_filter_team].sort(
            (a, b) => -1 * a.name.localeCompare(b.name)
          ),
        };
      }
    }
    case FILTER_PLAYERSBYHEIGHT:
      const height = action.payload;
      const filteredPlayers = state.player.filter(player => player.height === height);
      return {
        ...state,
        filteredPlayers
      };
    default:
      return state;
  }
};

export default playerReducer;
