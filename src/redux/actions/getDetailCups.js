import axios from "axios"
import { DETAIL_CUP } from "./actions-type"

export function getDetailCup(id){
    return async function(dispatch) {
        let cupDetail = await axios.get(`/cup/${id}`)

        let cup = cupDetail.data

        return dispatch({
            type: DETAIL_CUP,
            payload: cup
        })
    }
}