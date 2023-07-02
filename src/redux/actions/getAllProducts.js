import axios from "axios";

export function getAllProducts(){
    return async function(dispatch){
        const response = '/Store/products' //cambiar por endpoint del back
        const data = response.data

        dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: data
        })
    }
}