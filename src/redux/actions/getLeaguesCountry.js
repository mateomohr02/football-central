import axios from "axios";

export function getLeaguesCountry (countryId){
    return async function (dispatch) {
        let leaguesCountry = await axios.get(`/league/country/${countryId}`)
        console.log(leaguesCountry.data);
        return dispatch({
            type: 'GET_LEAGUES_COUNTRY',
            payload: leaguesCountry.data
        })
    }
}