import axios from "axios";

export function getNews() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/News");
      const News = response.data;
        console.log(News)
      dispatch({
        type: "NEWS",
        payload: News,
      });
    } catch (error) {
      // Manejo de errores en caso de que la solicitud falle
      console.log(error);
    }
  };
}