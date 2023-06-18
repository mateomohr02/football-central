import axios from "axios";

export function getLeaguesCountry (countryId){
    return async function (dispatch) {
        let leaguesCountry = await axios.get(`/league/country/${countryId}`)
        return dispatch({
            type: 'GET_LEAGUES_COUNTRY',
            payload: leaguesCountry.data
        })
    }
}