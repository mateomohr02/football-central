import axios from 'axios'
import { SEARCH_TEAM_LEAGUE } from './actions-type'
export function searchTeam (search) {
    return async function (dispatch) {
        try {
            const matchedTeam = await axios.get(`/team/search/${search}`)
            
            if (matchedTeam){
                return dispatch({
                    type: SEARCH_TEAM_LEAGUE,
                    payload: matchedTeam.data,
                })
            }
            
        } catch (error) {
            console.log(error)
            alert(`No hubo coincidencias para la búsqueda de ${search}`)
        }
    }
}