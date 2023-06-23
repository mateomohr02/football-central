import { SAVE_USER } from './actions-type';
import axios from 'axios'

export const saveUser = (payload) => {
    try{
        return async function (dispatch){
            const newUser = await axios.post('/user', payload)
            console.log(newUser.data)
            dispatch({
                type: SAVE_USER,
                payload: newUser.data
            });

            return alert("Usuario nuevo guardado con exito");
        }
    } catch (error){
        alert("No se puede guardar el usuario");
    }
}