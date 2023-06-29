import {
  GET_PROFILE,
  LOGIN,
  LOGOUT,
  PREMIUM,
  REGISTER,
  UPDATED_USER_IMAGE,
  UPDATE_USER_PROFILE,
  SET_LOGGED_IN_USER
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

      // case UPDATED_USER_IMAGE:
      //   return{...state, user:{...state.user, image:{action.payload}}}
    case PREMIUM:
      return {
        ...state,
        isPremium: true,
      };
      
    case SET_LOGGED_IN_USER:
      return {
        ...state,
        user: action.payload, // Aquí se actualiza el estado con el usuario logueado
      };
      
    default:
      return state;
  }
};

export default userReducer;
