import axios from "axios";

export function getGerDBFPokal (){
    return async function(dispatch){

        const roundOf16 = [
            {
                // MAGUNCIA BAY M
                teams: {
                    ids:[2556, 503],
                    teamData: []
                },
                finalResult: "0-4",
                lastMatchResult:"0-4"
            },
            {
                // SANDHAUSE FRIBURGO
                teams: {
                    ids:[3510, 3543],
                    teamData: []
                },
                finalResult: "0-2",
                lastMatchResult:"0-2"
            },
            {
                // RB LEIPZIG HOFFEN
                teams: {
                    ids:[277, 2726],
                    teamData: []
                },
                finalResult: "3-1",
                lastMatchResult:"3-1"
            },
            {
                // BOCHUM DORTM
                teams: {
                    ids:[999, 68],
                    teamData: []
                },
                finalResult: "1-2",
                lastMatchResult:"1-2"
            },
            {
                // NUREMBERG FORTUNA 
                teams: {
                    ids:[956,1092],
                    teamData: []
                },
                finalResult: "5-3",
                lastMatchResult:"1-1"
            },
            {
                // PADERBORN STUTTGART
                teams: {
                    ids:[2642, 3319],
                    teamData: []
                },
                finalResult: "1-2",
                lastMatchResult:"1-2"
            },
            {
                // UNIÓN BERLIN WOLFSBURG
                teams: {
                    ids:[1079, 510],
                    teamData: []
                },
                finalResult: "2-1",
                lastMatchResult:"2-1"
            },
            {
                // FRANKFURT SV DARMSTADT
                teams: {
                    ids:[366, 482],
                    teamData: []
                },
                finalResult: "4-2",
                lastMatchResult:"4-2"
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
                //FRANKFURT FC UNION BERLIN
                teams: {ids:[366,1079],
                    teamData: []
                },
                finalResult: "2-0",
                lastMatchResult:"2-0"
            },
            {   
                //NUREMB STUTT
                teams: {ids:[956, 3319],
                    teamData: []
                },
                finalResult: "0-1",
                lastMatchResult:"0-1"
            },
            {   
                //BEY FREI
                teams: {ids:[503,3543],
                    teamData: []
                },
                finalResult: "1-2",
                lastMatchResult:"1-2"
            },
            {   
                //RBLEIP DORT
                teams: {ids: [277,68],
                    teamData: []
                },
                finalResult: "2-0",
                lastMatchResult:"2-0"
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
                //FREI RB LEIP
                teams: {
                    ids:[3543, 277],
                    teamData: []
                },
                finalResult: "1-5",
                lastMatchResult:"1-5"
            },
            {   
                //STUTT FRANK
                teams: {
                    ids:[3319,366],
                    teamData: []
                },
                finalResult: "2-3",
                lastMatchResult:"2-3"
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
                //RB LEIP FRNK
                teams: {
                    ids:[277, 366],
                    teamData: []
                },
                finalResult: "2-0",
                lastMatchResult:"2-0"
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