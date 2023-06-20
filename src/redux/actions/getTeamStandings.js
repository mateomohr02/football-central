import axios from "axios";

export function getTeamStandings(id){
    return async function(dispatch){
        let dataApi  = axios.get(`http://localhost:3001/teams/${id}`)
        
        let team = dataApi?.data
        
        return dispatch({
            type:'GET_TEAM_STANDINGS',
            payload: team
        })

    }
}