import axios from "axios";

export function getUsersAdmin(username) {
    return async function(dispatch){
        try {
            console.log(username, 'USUARIO BUSCADO EN LA REQ    ');
            const response = await axios.get(`/users/${username}`)
            const usernames = response.data
            dispatch({
                type:'GET_USERS_ADMIN',
                payload: usernames
            })
        } catch (error) {
            console.log(error.message);
        }
        

    }
}