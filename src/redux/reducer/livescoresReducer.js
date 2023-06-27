import { GET_LIVESCORES_LATEST, RESET_LIVESCORES } from "../actions/actions-type";

const initialLiveState = {
  livescores: [],
};

const livescoresReducer = (state = initialLiveState, action) => {
  switch (action.type) {
    case RESET_LIVESCORES:
      return {
        ...state,
        livescores: action.payload,
      };

    case GET_LIVESCORES_LATEST:
      return {
        ...state,
        livescores: action.payload,
      };

    default:
      return state;
  }
};

export default livescoresReducer;
