import axios from "axios";
import { UPDATE_USER_PROFILE } from "./actions-type";

export const updateUserProfile = (id, data) => {
    return async function (dispatch) {
      try {
        console.log('Updating user profile:', data);
        const response = await axios.put(`/users/${id}`, data);
        console.log('Response:', response.data);
        const updatedUserProfile = response.data;
        dispatch({
          type: UPDATE_USER_PROFILE,
          payload: updatedUserProfile,
        });
      } catch (error) {
        console.log('Error:', error.message);
      }
    };
  };
  