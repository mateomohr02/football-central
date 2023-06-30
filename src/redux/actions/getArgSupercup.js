import axios from "axios";

export function  getArgSupercup(){
    return async function (dispatch){
        const response = await axios.get('/fixture/18792311')
        const match = response.data
        match.finalResult = "3-0"

        const BocaData = await axios.get('/team/587')
        const PatronatoData = await axios.get('/team/6969')

        match.boca = BocaData.data
        match.patronato = PatronatoData.data

        return dispatch({
            type: 'GET_DETAIL_CUP',
            payload: match
        })
    }
}