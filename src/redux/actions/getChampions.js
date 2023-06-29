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

        const roundOf16 = [
            {
                //BRUJAS BENFICA
                teams: {
                    ids:[605,340],
                    teamData: []
                },
                finalResult: "7-1",
                lastMatchResult:"5-1"
            },
            {   
                //BAYER PSG 
                teams: {ids:[503, 591],
                    teamData: []},
                finalResult: "3-0",
                lastMatchResult:"2-0"
            },
            {   
                //MILAN TOT
                teams: {ids:[113, 6],
                    teamData: []},
                finalResult: "1-0",
                lastMatchResult:"1-0"
            },
            {   
                //DORTMUND CHELSEA
                teams: {ids:[18, 68 ],
                    teamData: []},
                finalResult: "2-1",
                lastMatchResult:"2-0"
            },
            {
                //LIV RM
                teams: {ids:[3468, 8 ],
                    teamData: []},
                finalResult: "6-2",
                lastMatchResult:"1-0"
            },
            {   
                //FRANK NAPOLI
                teams: {ids:[597,366],
                    teamData: []},
                finalResult: "5-0",
                lastMatchResult:"3-0"
            },
            {   
                //RBL MAN CITY
                teams: {ids:[9,277],
                    teamData: []},
                finalResult: "8-1",
                lastMatchResult:"7-0"
            },
            {
                //INTER PORTO
                teams: {ids: [652, 2930],
                    teamData: []},
                finalResult: "1-0",
                lastMatchResult:"0-0"
            },
        ]


        await Promise.all(teamInfo)
        .then(response => {
            roundOf16.forEach(match => {
                match.teams.ids.forEach(id => {
                    const teamData = response.find( t =>
                        t.id === id)
                        match.teams.teamData.push(teamData)
                })
            })
        })

        const quarterFinals = [
            {   
                //Napoli Milan
                teams: {ids:[597,113],
                    teamData: []
                },
                finalResult: "1-2",
                lastMatchResult:"1-1"
            },
            {   
                //CHELSEA RM
                teams: {ids:[18, 3468],
                    teamData: []
                },
                finalResult: "0-4",
                lastMatchResult:"0-2"
            },
            {   
                //INTER BENFICA
                teams: {ids:[2930,605],
                    teamData: []
                },
                finalResult: "5-3",
                lastMatchResult:"3-3"
            },
            {   
                //BAY MAN C
                teams: {ids: [503,9],
                    teamData: []
                },
                finalResult: "1-4",
                lastMatchResult:"1-1"
            },
        ]

        await Promise.all(teamInfo)
            .then(response => {
                quarterFinals.forEach(match => {
                    match.teams.ids.forEach(id => {
                        const teamData = response.find( t =>
                            t.id === id)
                            match.teams.teamData.push(teamData)
                    })
                })
            })

        const semiFinal = [
            {
                //INTER MILAN
                teams: {
                    ids:[2930, 113],
                    teamData: []
                },
                finalResult: "3-0",
                lastMatchResult:"1-0"
            },
            {   
                //MAN C REAL M
                teams: {
                    ids:[9,3468],
                    teamData: []
                },
                finalResult: "5-1",
                lastMatchResult:"4-0"
            }
        ]
        
        await Promise.all(teamInfo)
            .then(response => {
                semiFinal.forEach(match => {
                    match.teams.ids.forEach(id => {
                        const teamData = response.find( t =>
                            t.id === id)
                            match.teams.teamData.push(teamData)
                    })
                })
            })

        const final = [
            {   
                //MAN C INTER
                teams: {
                    ids:[9, 2930],
                    teamData: []
                },
                finalResult: "1-0",
                lastMatchResult:"1-0"
            }
        ]

        await Promise.all(teamInfo)
            .then(response => {
                final.forEach(match => {
                    match.teams.ids.forEach(id => {
                        const teamData = response.find( t =>
                            t.id === id)
                            match.teams.teamData.push(teamData)
                    })
                })
            })
        
        const detailTournament = {
            groupStage: groupStandings,
            roundOf16: roundOf16,
            quarterFinals:quarterFinals,
            semiFinal: semiFinal,
            final: final
        }

        return dispatch({
            type: 'GET_DETAIL_CUP',
            payload: detailTournament
        })
          
    }
}