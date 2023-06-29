import axios from "axios";

export function  getArgSupercup(){
    return async function (dispatch){
        const response = await axios.get('/fixture/18792311')
        const match = response.data
        match.finalResult = "3-0"
    }
}