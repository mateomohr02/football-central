import axios from "axios";

export function getStandingsLeague(id){
    
    return async function (dispatch){
        let apiData = await axios.get(`http://localhost:3001/standings/20873?league_id=${id}`)
        
        let standings = apiData.data

        return dispatch({
            type: 'GET_STANDINGS_LEAGUE',
            payload: standings
        })
    }
}