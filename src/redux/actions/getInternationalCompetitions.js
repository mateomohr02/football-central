import axios from "axios";

export function getInternationalCompetitions (){
    
    return async function (dispatch){

    try {
        let competitions= ['2','5']
        //ECL
        //EUROPA LEAGUE
        const fetchCompetitions  = (id) => {
            return axios.get(`/league/${id}`)
            .then (response => response.data[0])
            .catch(error => {
                console.log(error.message)
            })
        }

        const competitionsInfo = competitions.map(url => fetchCompetitions(url))

        await Promise.all(competitionsInfo)
        .then(response => competitions = response)

        return dispatch({
            type: 'GET_INTERNATIONAL_LEAGUES',
            payload: competitions
        })

     } catch (error) {
        console.log(error.message)
     }
    }   
}
