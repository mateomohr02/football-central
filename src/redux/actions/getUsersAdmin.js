import axios from "axios";

export function getUsersAdmin(username) {
    return async function(dispatch){
        try {
            const response = [] //ACÁ IRIA LA REQ AL BACK
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