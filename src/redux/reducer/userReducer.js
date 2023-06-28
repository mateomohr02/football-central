import {
  GET_PROFILE,
  LOGIN,
  LOGOUT,
  PREMIUM,
  REGISTER,
  UPDATE_USER_PROFILE,
} from "../actions/actions-type";

const intialUserState = {
  registeredUser: {},
  isAuthenticated: false,
  isPremium: false,
  user: {},
  userProfile: [],
};

const userReducer = (state = intialUserState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      console.log("DATA?", action.payload);
      console.log("DATA?", action);
      return {
        ...state,
        userProfile: action.payload,
      };

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

export default userReducer;
