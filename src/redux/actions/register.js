import { REGISTER } from "./actions-type";
import axios from "axios";

export const register = (payload) => {
  return async (dispatch) => {
    try {
      const newUser = await axios.post("/users", payload);
      dispatch({
        type: REGISTER,
        payload: newUser.data,
      });
       localStorage.setItem("id", newUser.data.id);

      alert("Usuario creado con éxito");
    } catch (error) {
      console.log(error);
      alert("Error al crear usuario");
    }
  };
};