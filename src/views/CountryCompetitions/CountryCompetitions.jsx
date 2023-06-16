import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getLeaguesCountry } from '../../redux/actions/getLeaguesCountry'
import { resetLeaguesCountry } from '../../redux/actions/resetLeaguesCountry'

import { Link } from 'react-router-dom'

import CardLeaguesCountry from '../../components/CardLeaguesCountry/CardLeaguesCountry'

import style from './CountryCompetitions.module.css'

const CountryCompetitions = () => {
  
  const dispatch = useDispatch()

  const {id} = useParams()
  
  useEffect(()=>{
    dispatch(getLeaguesCountry(id))
    return() => dispatch(resetLeaguesCountry()) 
  }, [dispatch, id])

  const leagues = useSelector(state => state.countryLeagues)
  

  return (
    <div className={style.background}>
    <div className={style.container}>   

        {leagues.map((l) => {
          return(
            <CardLeaguesCountry 
            
            key = {l.id}
            image_path = {l.image_path}
            name = {l.name}
            
            />
          )
        })}
    </div>
    </div>
  )
}

export default CountryCompetitions