import axios from "axios";

export function getLibertadores (){
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
        const response = await axios.get('/standings/rounds/303508')

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
    }
}