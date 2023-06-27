import axios from "axios";
import { GET_STANDINGS_LEAGUE } from "./actions-type";

export function getStandingsLeague(id){
    
    return async function (dispatch){
    let url;

    if (id === '636'){
        url = `/standings/20873?league_id=${id}`
    }
    if (id === '1502'){
        url = `/standings/21050?league_id=${id}`
    }
    if (id === '82'){
        url = `/standings/19744?league_id=${id}`
    }
    if (id === '85'){
        url = `/standings/19743?league_id=${id}`
    }
    if (id === '8'){
        url = `/standings/19734?league_id=${id}`
    }
    if (id === '9'){
        url = `/standings/19793?league_id=${id}`
    }
    if (id === '12'){
        url = `/standings/19794?league_id=${id}`
    }
    if (id === '17'){
        url = `/standings/19917?league_id=${id}`
    }
    if (id === '23'){
        url = `/standings/19652?league_id=${id}`
    }
    if (id === '24'){
        url = `/standings/19652?league_id=${id}`
    }
    if (id === '27'){
        url = `/standings/19652?league_id=${id}`
    }
    if (id === '45'){
        url = `/standings/19989?league_id=${id}`
    }
    
    try {
        //CÓDIGO ASYNC
        let apiData = await axios.get(url);
        let standings = apiData.data;

        standings = standings.filter(t => t.points !== 0)
        
        const arrURLs = standings.map(t => {
            return `/team/${t.participant_id}`
        })
        
        const fetchTeam = (url) => {
            return axios.get(url)
            .then(response => response.data)
            .catch(error => {
                throw Error(error.message)
            })
        }

        const teamsInfo = arrURLs.map(url => fetchTeam(url))

        //[{...},{...},{...}]

        await Promise.all(teamsInfo)
        .then(response => {
            standings.forEach(position => {
                const teamInfo = response.find(team => 
                    team.id === position.participant_id)
                position.teamInfo = teamInfo
            });
        })

        return dispatch({
            type: GET_STANDINGS_LEAGUE,
            payload: standings
        })
        
      } catch (error) {
        
        alert('No se puede acceder al detail de esta liga')
        
      }

    }
}