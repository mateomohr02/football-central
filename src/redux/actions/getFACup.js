import axios from "axios";

export function getFACup (){
    return async function (dispatch){
    const roundOf16 = [
            {
                //STOKE CITY BRIGHTON
                teams: {
                    ids:[26, 78],
                    teamData: []
                },
                finalResult: "0-1",
                lastMatchResult:"0-1"
            },
            {
                //Leichester Blackburn
                teams: {
                    ids:[42,2],
                    teamData: []
                },
                finalResult: "1-2",
                lastMatchResult:"1-2"
            },
            {
                //FULHAM LEEDS
                teams: {
                    ids:[11,71],
                    teamData: []
                },
                finalResult: "2-0",
                lastMatchResult:"2-0"
            },
            {
                //BRISTOL MC
                teams: {
                    ids:[122,9],
                    teamData: []
                },
                finalResult: "0-3",
                lastMatchResult:"0-3"
            },
            {
                //SOUTH GRIM
                teams: {
                    ids:[65,198],
                    teamData: []
                },
                finalResult: "1-2",
                lastMatchResult:"1-2"
            },
            {
                //BURNLEY FLEETWOOD
                teams: {
                    ids:[27,317],
                    teamData: []
                },
                finalResult: "1-0",
                lastMatchResult:"1-0"
            },
            {
                //MAN U WEST HAM
                teams: {
                    ids:[14, 1  ],
                    teamData: []
                },
                finalResult: "3-1",
                lastMatchResult:"3-1"
            },
            {
                //SHEFFIELD TOT
                teams: {
                    ids:[21,6],
                    teamData: []
                },
                finalResult: "1-0",
                lastMatchResult:"1-0"
            },
        ]

        const teamIds = roundOf16.map(match => {
            return match.teams.ids
        }).concat().flat()

        console.log(teamIds, 'IDS');

        const fetchTeam = (teamId) => {
            return axios.get(`/team/${teamId}`)
            .then(response => response.data)
            .catch(error => {
                throw Error(error.message)
            })
        }

        const teamInfo = teamIds.map(id => fetchTeam(id))

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
                //MAN C BURNLEY 
                teams: {ids:[9,27],
                    teamData: []
                },
                finalResult: "6-0",
                lastMatchResult:"6-0"
            },
            {   
                //SHEFF BLACKBURN
                teams: {ids:[21,2],
                    teamData: []
                },
                finalResult: "3-2",
                lastMatchResult:"3-2"
            },
            {   
                //BRIG GRIMS
                teams: {ids:[78,198],
                    teamData: []
                },
                finalResult: "5-0",
                lastMatchResult:"5-0"
            },
            {   
                //MAN U FULHAM
                teams: {ids: [14,11],
                    teamData: []
                },
                finalResult: "3-1",
                lastMatchResult:"3-1"
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
                //MAN C SHEF
                teams: {ids:[9,21],
                    teamData: []
                },
                finalResult: "3-0", 
                lastMatchResult:"3-0"
            },
            {   
                //BRI MAN U
                teams: {ids:[78,14],
                    teamData: []
                },
                finalResult: "6-7",
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
        
            const final = [
                {   
                    //MAN C MAN U
                    teams: {ids:[9,14],
                        teamData: []
                    },
                    finalResult: "2-1", 
                    lastMatchResult:"2-1"
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