import axios from 'axios'

export function searchTeam (search) {
    return async function (dispatch) {
        try {
            const matchedTeam = await axios.get(`/team/search/${search}`)
            const matchedLeague = await axios.get(`/league/search/${search}`)

            if (matchedLeague){
                return dispatch({
                    type: 'SEARCH_TEAM_LEAGUE',
                    payload: matchedLeague,
                })
            }
            if (matchedTeam){
                return dispatch({
                    type: 'SEARCH_TEAM_LEAGUE',
                    payload: matchedTeam,
                })
            }          
        } catch (error) {
            alert(`No hubo coincidencias para la búsqueda de ${search}`)
        }
    }
}