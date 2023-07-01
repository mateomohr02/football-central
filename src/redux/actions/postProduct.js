import axios from "axios";

export function postProduct(newProduct){
    return async function(dispatch){

        try {
            const response = await axios.post('products', newProduct)

            dispatch({
                type: 'POST_NEW_PRODUCT',
            })
        } catch (error) {
            console.log(error.message);
        }
       

    }
}