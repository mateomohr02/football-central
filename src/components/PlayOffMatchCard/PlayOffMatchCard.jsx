import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const PlayOffMatchCard = ({arrMatches}) => {
    return (
    <div key={uuidv4()}>
       {arrMatches?.map(match => {
            return(
                <div key={uuidv4()}>
                    <p><img src={match.teams.teamData[0].image_path} alt={`Escudo ${match.teams.teamData[0].name}`} />{match.teams.teamData[0].name}</p><p>VS</p><p>{match.teams.teamData[1].name}<img src={match.teams.teamData[1].image_path} alt={`Escudo ${match.teams.teamData[1].name}`} /></p><p>{match.lastMatchResult}{` Final: (${match.finalResult})`}</p>   
                </div>
            )
       })}
    </div>
  )
}

export default PlayOffMatchCard