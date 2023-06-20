import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailLeague } from '../../redux/actions/getDetailLeague'
import { resetDetailLeague } from '../../redux/actions/resetDetailLeague'
import { getStandingsLeague } from '../../redux/actions/getStandingsLeague.js'
//import { resetStandingsLeague } from '../../redux/actions/resetStandingsLeague'

const DetailLeague = () => {
  
    const dispatch = useDispatch()

    const { id } = useParams()
    
    const league = useSelector(state => state.detailLeague)
    const standings = useSelector(state => state.standings)

    useEffect(()=>{
      dispatch(getDetailLeague(id))
      dispatch(getStandingsLeague(id))
      return () => {
        dispatch(resetDetailLeague());
      }      
    },[dispatch, id])

    return (
    <div>
      <span>DetailLeague {`${league?.name}`}</span>
      <span></span>
      {standings.map(t => {
        
        return(
          <div>
            
          </div>
        )
      })}   
    </div>
  )
}

export default DetailLeague