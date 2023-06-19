import axios from "axios";

export function getStandingsLeague (league_id){
    return async function(dispatch){
        
        const standings = [];

        if (league_id === 636) {
            standings = await axios.get(`/league/20837?league_id=${league_id}`)
        }

        if (league_id === 82) {
            standings = await axios.get(`/league/20837?league_id=${league_id}`)
        }

        if (league_id === 85) {
            standings = await axios.get(`/league/20837?league_id=${league_id}`)
        }

        if (league_id === 8) {
            standings = await axios.get(`/league/20837?league_id=${league_id}`)
        }

        
        if (!standings) {
            return({
                type: 'GET_STANDINGS_LEAGUE',
                payload: []
            })
        }
        
        else{
            return dispatch({
                type: 'GET_STANDINGS_LEAGUE',
                payload: standings
            })   
        }

    }
}