import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getStandingsLeague } from '../../redux/actions/getStandingsLeague'
import { getDetailLeague } from '../../redux/actions/getDetailLeague'
import { resetDetailLeague } from '../../redux/actions/resetDetailLeague'
import { resetStandingsLeague } from '../../redux/actions/resetStandingsLeague'

import style from './EngNationalLeague.module.css'

const EngNationalLeague = () => {

    const dispatch = useDispatch()
    const {id} = useParams()
    const standings = useSelector(state => state.standings.standings)

    useEffect(()=>{
        dispatch(getDetailLeague(id))
        dispatch(getStandingsLeague(id))
        return () => {
            dispatch(resetDetailLeague());
            dispatch(resetStandingsLeague())
          }
    },[dispatch, id])

  return (
    <div className={style.container}>
        <h2>TABLA DE POSICIONES DE NATIONAL LEAGUE</h2>
    <div className={style.tableContainer}>
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

export default EngNationalLeague