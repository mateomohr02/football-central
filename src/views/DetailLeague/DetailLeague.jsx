import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailLeague } from '../../redux/actions/getDetailLeague'
import { resetDetailLeague } from '../../redux/actions/resetDetailLeague'
import { getStandingsLeague } from '../../redux/actions/getStandingsLeague'
import { resetStandingsLeague } from '../../redux/actions/resetStandingsLeague'

const DetailCompetition = () => {
  
    const dispatch = useDispatch()

    const { id } = useParams()
    
    const league = useSelector(state => state.detailLeague)
    const standings = useSelector(state => state.standingsLeague)

    useEffect(()=>{
        dispatch(getDetailLeague(id))
        dispatch(getStandingsLeague(id))
        return () => {
          dispatch(resetStandingsLeague())
          dispatch(resetDetailLeague());
        }
        
    },[dispatch, id])

    //console.log(standings);


    return (
    <div>
      <span>DetailCompetition {`${league?.name}`}</span>    
    </div>
  )
}

export default DetailCompetition