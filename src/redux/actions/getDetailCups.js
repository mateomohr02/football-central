import axios from "axios"

export function getDetailCup(id){
    return async function(dispatch) {
        let cupDetail = await axios.get(`/cup/${id}`)

        let cup = cupDetail.data

        return dispatch({
            type: 'DETAIL_CUP',
            payload: cup
        })
    }
}