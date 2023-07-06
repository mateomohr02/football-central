import axios from "axios";
import { UPDATE_USER_PROFILE } from "./actions-type";

export const updateUserProfile = (id, data) => {
  console.log(data)
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); 
      const headers = {
        Authorization: `Bearer ${token}`, 
      };
      console.log(token)
      console.log(headers)

      const response = await axios.put(`/users/${id}`, data, { headers });
      console.log("Response:", response.data);
      const updatedUserProfile = response.data;
      dispatch({
        type: UPDATE_USER_PROFILE,
        payload: updatedUserProfile,
      });
    } catch (error) {
      console.log("Error:", error.message);
    }
  };
};