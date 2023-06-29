import axios from "axios"
import { UPDATED_USER_IMAGE } from "./actions-type"

export const updateUserImage = (id, image) =>{
    return async function(dispatch){
        try {
            const result = await axios.put(`/users/image/${id}`,{image: image})
            const updatedUserImage = result.data
            console.log(result.data)
            dispatch({
                type: UPDATED_USER_IMAGE,
                payload: updatedUserImage,
              });
        } catch (error) {
            console.log(error)
        }
    } 
}