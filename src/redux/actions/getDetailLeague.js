import axios from "axios";
import { DETAIL_LEAGUE } from "./actions-type";

export function getDetailLeague(id){

    return async function(dispatch) {
        let leagueDetail = await axios.get(`/league/${id}`)

        let league = leagueDetail.data

        return dispatch({
            type: DETAIL_LEAGUE,
            payload: league
        })
    }
}