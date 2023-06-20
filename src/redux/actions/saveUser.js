import { SAVE_USER } from './actions-type';
import axios from 'axios'

export const saveUser = (payload) => {
    try{
        return async function (dispatch){
            const newUser = await axios.post('http://localhost:3001/user', payload)
            console.log(newUser.data)
            dispatch({
                type: SAVE_USER,
                payload: response.data
            });
            return alert("Usuario nuevo guardado con exito");
        }
    } catch (error){
        return alert("No se puede guardar el usuario");
    }
}