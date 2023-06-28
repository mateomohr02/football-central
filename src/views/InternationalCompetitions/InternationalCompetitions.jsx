import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInternationalCompetitions } from '../../redux/actions/getInternationalCompetitions'
import { resetInternationalLeagues } from '../../redux/actions/resetInternationalLeagues'
import { Link } from 'react-router-dom'
import CardLeaguesCountry from '../../components/CardLeaguesCountry/CardLeaguesCountry'
const InternationalCompetitions = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getInternationalCompetitions())
    return () => dispatch(resetInternationalLeagues())
  },[dispatch])
  
  const leagues = useSelector(state => state.leagueCup.internationalLeagues)
  return(
    <div>
      {leagues.map(l => {
        return (
        <Link to={`/competitions/international/${l.id}`}>
          <CardLeaguesCountry
            image_path={l.image_path}
            name={l.name}
            id={l.id}
          />
        </Link>)
      })}
    </div>
  )
}

export default InternationalCompetitions