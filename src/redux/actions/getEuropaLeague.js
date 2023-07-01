import axios from "axios";
export function getEuropaLeague(){
    return async function (dispatch){
        let groupStandings = [
            {name: 'A',
            group_id: 247770,
            standings: []},

            {name: 'B',
            group_id: 247771,
            standings: []},

            {name: 'C',
            group_id: 247772,
            standings: []},

            {name: 'D',
            group_id: 247773,
            standings: []},

            {name: 'E',
            group_id: 247774,
            standings: []},

            {name: 'F',
            group_id: 247775,
            standings: []},

            {name: 'G',
            group_id: 247776,
            standings: []},

            {name: 'H',
            group_id: 247777,
            standings: []}
        ]

        const response = await axios.get('/standings/rounds/290024')
        
        //Sevilla JUVENTUS SPORTINGLISBOA 
        const teamsNotGroup = [676, 625, 58, 1079, 3321]

        const standings = response.data

        standings.map(s => {
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

        console.log(groupStandings, 'Groups')

        //FUNCION FETCH DETAIL TEAMS
        const fetchTeam = (teamId) => {
            return axios.get(`/team/${teamId}`)
            .then(response => response.data)
            .catch(error => {
                throw Error(error.message)
            })
        }

        const groupsTeamIds = groupStandings.map(group => group.standings.map(team => team.teamId))

        const teamIds = groupsTeamIds.concat(teamsNotGroup).flat()

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

        //ROUND OF 16

        const roundOf16 = [
            {
                //FRIBURGO JUVE
                teams: {
                    ids:[3543,625],
                    teamData: []
                },
                finalResult: "0-3",
                lastMatchResult:"0-2"
            },
            {       
                //FEYENOR SHAKHTAR
                teams: {ids:[73,621],
                    teamData: []},
                finalResult: "8-2",
                lastMatchResult:"7-1"
            },
            {   
                //BETIS MAN UNI
                teams: {ids:[485,14],
                    teamData: []},
                finalResult: "1-5",
                lastMatchResult:"0-1"
            },
            {   
                //FENERBAHCE SEVILLA
                teams: {ids:[88,676],
                    teamData: []},
                finalResult: "1-2",
                lastMatchResult:"1-0"
            },  
            {
                //FERENCVAROS LEVERK
                teams: {ids:[112,3321],
                    teamData: []},
                finalResult: "0-4",
                lastMatchResult:"0-2"
            },
            {   
                //REAL SOC ROMA
                teams: {ids:[594,37],
                    teamData: []},
                finalResult: "0-2",
                lastMatchResult:"0-0"
            },
            {
                //UNION SAINT-G FC UNION BERLIN
                teams: {ids: [3958, 1079],
                    teamData: []},
                    finalResult: "3-0",
                    lastMatchResult:"6-3"
                },
            {   
                //ARS SPORTING LISBOA
                teams: {ids:[9,58],
                    teamData: []},
                finalResult: "3-5",
                lastMatchResult:"1-1"
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
        
        console.log(roundOf16, 'OCTAVOS');

        const quarterFinals = [
            {   
                //FEYENOORD ROMA
                teams: {ids:[73,37],
                    teamData: []
                },
                finalResult: "2-4",
                lastMatchResult:"1-4"
            },
            {   
                //CJUVE LISBOA
                teams: {ids:[625,58],
                    teamData: []
                },
                finalResult: "1-2",
                lastMatchResult:"1-1"
            },
            {   
                //MAN UNI SEVILLA
                teams: {ids:[14,676],
                    teamData: []
                },
                finalResult: "2-5",
                lastMatchResult:"0-3"
            },
            {   
                //UNION SAIN LEVERK
                teams: {ids: [3958,3321],
                    teamData: []
                },
                finalResult: "2-5",
                lastMatchResult:"1-4"
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
                //SEVILLA JUVE
                teams: {
                    ids:[676,625],
                    teamData: []
                },
                finalResult: "3-2",
                lastMatchResult:"2-1"
            },
            {   
                //LEVERK ROMA
                teams: {
                    ids:[3321,37],
                    teamData: []
                },
                finalResult: "0-1",
                lastMatchResult:"0-0"
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

            console.log(semiFinal, 'SEMI');

            const final = [
                {   
                    //SEVI ROMA
                    teams: {
                        ids:[676,37],
                        teamData: []
                    },
                    finalResult: "1-4",
                    lastMatchResult:"1-1"
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