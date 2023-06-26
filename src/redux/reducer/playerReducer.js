import { GET_PLAYER_BY_ID } from "../actions/actions-type";

const initialPlayerState = {
  player: {},
};

const playerReducer = (state = initialPlayerState, action) => {
  switch (action.type) {
    case GET_PLAYER_BY_ID:
      return { ...state, player: action.payload };
    default:
      return state;
  }
};

export default playerReducer;
