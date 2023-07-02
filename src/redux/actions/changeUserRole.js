import axios from "axios";

export function changeUserRole(infoUser){
    console.log(infoUser);
    return async function(dispatch){
        try {
            const response = //await axios.put('/users/role', infoUser) //await axios.put(`/users`)
            
            dispatch({
                type: 'CHANGE_USER_ROLE',
                payload: true
            })

        } catch (error) {
            alert(`No se pudo cambiar el rol del usuario: ${error.message}`)
        }
    }
}