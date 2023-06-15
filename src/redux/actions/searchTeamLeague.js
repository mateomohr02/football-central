import axios from 'axios'

export function searchTeam (search) {
    return async function (dispatch) {
        try {
            const matchedTeam = await axios.get(`/team/search/${search}`)
            
            //const matchedLeague = await axios.get(`/league/search/${search}`)

            console.log(matchedTeam)

            if (matchedTeam){
                return dispatch({
                    type: 'SEARCH_TEAM_LEAGUE',
                    payload: matchedTeam.data,
                })
            }
            
        } catch (error) {
            console.log(error)
            alert(`No hubo coincidencias para la búsqueda de ${search}`)
        }
    }
}