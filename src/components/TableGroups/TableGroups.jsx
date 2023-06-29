import React from 'react'

const TableGroups = ({group}) => {
  
  return (
    <div key={group?.group_id}>
        <h3>Grupo {group?.name}</h3>
    <table >
          <thead>
            <tr>
              <th></th>
              <th>Equipo</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {group?.standings?.map(team => {
              return (
                <tr key={team.teamId}>
                  <td><img src={team.teamData.image_path} alt={`Escudo ${team.teamData.name}`} /></td>
                  <td>{team.teamData.name}</td>
                  <td>{team.points}</td>
                </tr>
              )
            })}
          </tbody>
      
        </table>
    </div>
  )
}

export default TableGroups