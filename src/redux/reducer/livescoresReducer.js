import { GET_DETAIL_LIVESCORES, GET_LIVESCORES_LATEST, RESET_LIVESCORES } from "../actions/actions-type";

const initialLiveState = {
  livescores: [],
  detailLivescores:[]
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
    case GET_DETAIL_LIVESCORES:{
      return{
        ...state,
        detailLivescores:action.payload
      }
    }
    default:
      return state;
  }
};

export default livescoresReducer;
