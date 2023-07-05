import {
  GET_PROFILE,
  LOGIN,
  LOGOUT,
  PREMIUM,
  REGISTER,
  UPDATED_USER_IMAGE,
  UPDATE_USER_PROFILE,
  SET_LOGGED_IN_USER,
  CHANGE_USER_ROLE,
  DELETE_USER,
  RESET_CHANGED_ROLE,
  CLEAR_SEARCHED_USERS,
} from "../actions/actions-type";

const intialUserState = {
  registeredUser: {},
  isAuthenticated: false,
  isPremium: false,
  user: {},
  userProfile: [],
  searchedUsers: [],
  roleChanged: null,
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
    case DELETE_USER:
      return {
        ...state,
        user: action.payload,
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
    case "GET_USERS_ADMIN":
      return {
        ...state,
        searchedUsers: action.payload,
      };
    case CHANGE_USER_ROLE:
      return {
        ...state,
        roleChanged: action.payload,
      };
    case RESET_CHANGED_ROLE:
      return {
        ...state,
        roleChanged: null,
      };
    case CLEAR_SEARCHED_USERS:
      return {
        ...state,
        searchedUsers: [],
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
