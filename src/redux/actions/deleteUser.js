import axios from "axios";
import { DELETE_USER } from "./actions-type";
import Swal from "sweetalert2";

export function deleteUser(userId) {
  console.log("UserID: ", userId);
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/users/${userId}`);
      dispatch({
        type: DELETE_USER,
        payload: response.data,
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Usuario Borrado",
      });
    } catch (error) {
      alert(`No se pudo borrar el usuario: ${error.message}`);
    }
  };
}
