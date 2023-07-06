import axios from "axios";
import Swal from "sweetalert2";
import { POST_NEW_PRODUCT } from "./actions-type";

export function postProduct(newProduct) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/Store/products", newProduct);
      dispatch({
        type: POST_NEW_PRODUCT,
        payload: response.data
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Producto creado correctamente",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
