import axios from "axios";

export function  getArgSupercup(){
    return async function (dispatch){
        const response = await axios.get('/fixture/18525887')
        const match = response.data
        match.finalResult = "3-1"

        const LPData = await axios.get('/team/8')
        const MCData = await axios.get('/team/9')

        match.liverpool = LPData.data
        match.manchesterCity = MCData.data

        return dispatch({
            type: 'GET_DETAIL_CUP',
            payload: match
        })
    }
    
}