import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailLeague } from '../../redux/actions/getDetailLeague'
import { resetDetailLeague } from '../../redux/actions/resetDetailLeague'
import { getStandingsLeague } from '../../redux/actions/getStandingsLeague.js'
import { resetStandingsLeague } from '../../redux/actions/resetStandingsLeague'

import style from './DetailLeague.module.css'

const DetailLeague = () => {
  
    // const standings = [{
    // participant_id: 10002,
    // points: 46,
    // position: 1,
    // teamInfo:{
    //   name: 'River Plate',
    //   image_path: 'https://cdn.sportmonks.com/images/soccer/teams/18/10002.png'
    //   }
    // },{
    //   participant_id: 3393,
    //   points: 0,
    //   position: 1,
    //   teamInfo:{
    //     name: 'Belgrano',
    //     image_path: 'https://cdn.sportmonks.com/images/soccer/teams/13/6829.png'
    //     }
    // }]

    const dispatch = useDispatch()

    const { id } = useParams()
    const league = useSelector(state => state.leagueCup.detailLeague)
    const standings = useSelector(state => state.standings.standings)

    useEffect(()=>{
      dispatch(getDetailLeague(id))
      dispatch(getStandingsLeague(id))
      return () => {
        dispatch(resetDetailLeague());
        dispatch(resetStandingsLeague())
      }      
    },[dispatch, id])

    console.log(standings, 'Componente')

    return (
    <div className={style.container}>
    <div className={style.tableContainer}>
      <h2>{`Tabla de posiciones de ${league.name}`}</h2>
      <div>
        <table className={style.table}>
          <thead>
            <tr>
              <th className={`${style.rowTr} ${style.colTeam}`}></th>
              <th className={`${style.rowTr} ${style.colName}`}>Equipo</th>
              <th className={`${style.rowTrPts} ${style.colPoints}`}>Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map(p => {
              console.log(p, 'Posición')
              return (
                <tr key={p?.participant_id}>
                  <td className={style.colTeam} ><img className={style.teamImg} src={p?.teamInfo?.image_path} alt={`Escudo ${p?.teamInfo?.name}`} /></td>
                  <td className={style.colName} >{p?.teamInfo?.name}</td>
                  <td className={style.colPoints} >{p?.points}</td>
                </tr>
              )
            })}
          </tbody>
      
        </table>
      </div>
    </div>
    </div>
  )
}

export default DetailLeague