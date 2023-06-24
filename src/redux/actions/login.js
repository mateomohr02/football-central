import axios from "axios";
import Swal from "sweetalert2";
import { LOGIN } from "./actions-type";

export const login = (payload) => {
  console.log("PAYLOAD EN ACTION: ======>> ", payload);
  return async (dispatch) => {
    try {
      const response = await axios.post("/users/login", payload);
      console.log(response.data);
      dispatch({
        type: LOGIN,
        payload: response.data,
      });
      localStorage.setItem("loggedIn", "true");
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Login válido",
          text: "Redireccionando a Home...",
          allowOutsideClick: false,
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1000,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            window.location.href = "/inicio";
          },
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Inválido",
          text: "Usuario/Password inválido",
        });
      }
    } catch (error) {
      console.log(error);
      alert("Login inválido");
    }
  };
};