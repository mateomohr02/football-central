import axios from "axios";

export function changeUserRole(userId){
    return async function(dispatch){
        try {
            const response = await axios.put(`/${userId}`)
            const data = response.data
            dispatch({
                type: 'CHANGE_USER_ROLE',
                payload: true
            })

        } catch (error) {
            alert(`No se pudo cambair el rol del usuario: ${error.message}`)
        }
    }
}