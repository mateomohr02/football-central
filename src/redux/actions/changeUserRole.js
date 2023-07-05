import axios from "axios";
import { CHANGE_USER_ROLE, RESET_CHANGED_ROLE } from "./actions-type";
import Swal from "sweetalert2";

export function changeUserRole(userId, data){
    console.log("UserID: ", userId);
    console.log("DATA: ", data);

    return async function(dispatch){
        try {
            const response = await axios.put(`/users/role/${userId}`,data);
            dispatch({
                type: CHANGE_USER_ROLE,
                payload: response.data
            })
             Swal.fire({
               icon: "success",
               title: "Success",
               text: "Rol Modificado!",
             });
        } catch (error) {
            alert(`No se pudo cambiar el rol del usuario: ${error.message}`)
        }
    }
}

export function resetRoleChanged() {
  return {
    type: RESET_CHANGED_ROLE,
  };
}