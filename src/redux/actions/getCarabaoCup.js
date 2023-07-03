import axios from "axios";

export function getCarabaoCup (){
    return async function(dispatch){
        const roundOf16 = [
            {
                //WOLVES GILLINGHAM
                teams: {
                    ids:[29,307],
                    teamData: []
                },
                finalResult: "2-0",
                lastMatchResult:"2-0"
            },
            {
                //SOUTH LINCOLN
                teams: {
                    ids:[65,305],
                    teamData: []
                },
                finalResult: "2-1",
                lastMatchResult:"2-1"
            },
            {
                //NEWCAS BOURNE
                teams: {
                    ids:[20,52],
                    teamData: []
                },
                finalResult: "1-0",
                lastMatchResult:"1-0"
            },
            {
                //MK DONS LEIC
                teams: {
                    ids:[341, 42],
                    teamData: []
                },
                finalResult: "0-3",
                lastMatchResult:"0-3"
            },
            {
                //BLACK NOTT
                teams: {
                    ids:[2,63],
                    teamData: []
                },
                finalResult: "1-4",
                lastMatchResult:"1-4"
            },
            {
                //CHARLTON BRI
                teams: {
                    ids:[4, 78],
                    teamData: []
                },
                finalResult: "4-3",
                lastMatchResult:"0-0"
            },
            {
                //MAN U BURNLEY
                teams: {
                    ids:[14, 27],
                    teamData: []
                },
                finalResult: "2-0",
                lastMatchResult:"2-0"
            },
            {
                //MAN C LIV
                teams: {
                    ids:[9,8],
                    teamData: []
                },
                finalResult: "3-2",
                lastMatchResult:"3-2"
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
                //MAN U CHARL 
                teams: {ids:[14, 4],
                    teamData: []
                },
                finalResult: "3-0",
                lastMatchResult:"3-0"
            },
            {   
                //NEWCAS LEICHES
                teams: {ids:[20,42],
                    teamData: []
                },
                finalResult: "2-0",
                lastMatchResult:"2-0"
            },
            {   
                //NOTT WOLVES
                teams: {ids:[63,29],
                    teamData: []
                },
                finalResult: "4-3",
                lastMatchResult:"1-1"
            },
            {   
                //SOUTH MAN C
                teams: {ids: [65,9],
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
                //SOUTH NEWCAS
                teams: {ids:[65,20],
                    teamData: []
                },
                finalResult: "0-1", 
                lastMatchResult:"0-1"
            },
            {   
                //MAN U NOTT
                teams: {ids:[14,63],
                    teamData: []
                },
                finalResult: "0-3",
                lastMatchResult:"0-3"
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
                    //MAN U NEWCAS
                    teams: {ids:[14,20],
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
    }
}