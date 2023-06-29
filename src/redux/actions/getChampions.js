import axios from "axios"

export function getChampions(){

    return async function (dispatch){
        const groupStandings = [
            {name: 'A',
            group_id: 247762,
            standings: []},

            {name: 'B',
            group_id: 247763,
            standings: []},

            {name: 'C',
            group_id: 247764,
            standings: []},

            {name: 'D',
            group_id: 247765,
            standings: []},

            {name: 'E',
            group_id: 247766,
            standings: []},

            {name: 'F',
            group_id: 247767,
            standings: []},

            {name: 'G',
            group_id: 247768,
            standings: []},

            {name: 'H',
            group_id: 247769,
            standings: []}
        ]

        const standings = await axios.get('/standings/rounds/290018') 

        standings.data.map(s => {
            for (const group of groupStandings) {
                if (group.group_id === s.group_id){
                    group.standings.push({teamId : s.participant_id,
                        points : s.points,
                        position : s.position
                    })
                }  
            }
            return standings
        })

        console.log(groupStandings, 'Group Standings');

        //FUNCION FETCH DETAIL TEAMS
        const fetchTeam = (teamId) => {
            return axios.get(`/team/${teamId}`)
            .then(response => response.data)
            .catch(error => {
                throw Error(error.message)
            })
        }

        //LÓGICA PROMISE ALL

        const groupsTeamIds = groupStandings.map(group => group.standings.map(team => team.teamId))

        const teamIds = groupsTeamIds.flat()

        const teamInfo = teamIds.map(id => fetchTeam(id))

        await Promise.all(teamInfo)
            .then(response => {
                groupStandings.forEach(group => {
                    group.standings.forEach( team => {
                        const teamData = response.find( t =>
                        t.id === team.teamId)
                        team.teamData = teamData
                    })
                })
            })     
        
        return dispatch({
            type: 'GET_DETAIL_CUP',
            payload: groupStandings
        })
          
    }
}