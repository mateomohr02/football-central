import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInternationalCompetitions } from '../../redux/actions/getInternationalCompetitions'
import { resetInternationalLeagues } from '../../redux/actions/resetInternationalLeagues'
import { Link } from 'react-router-dom'
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CardLeaguesCountry from '../../components/CardLeaguesCountry/CardLeaguesCountry'

const InternationalCompetitions = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getInternationalCompetitions())
    return () => dispatch(resetInternationalLeagues())
  },[dispatch])
  
  const leagues = useSelector(state => state.leagueCup.internationalLeagues)

  console.log(leagues)

  return(
    <div className=" md:h-[90vh] md:overflow-hidden md:flex md:justify-center md:items-center ">
      <div className="bg-pf-blue md:w-[90%] md:h-[90%] md:rounded-xl">
        {/* barra de breadcrumb y filters */}
        <div className=" md:flex md:justify-end md:items-center md:pr-5 md:flex-row md:gap-x-5 md:h-[12%] md:w-[98%] md:mx-auto md:mb-5 border-b-2 ">
          <div className="md:pl-5 md:w-[50%]">
          </div>
            <Breadcrumb />
          </div>
          
      <div className=" md:w-full md:h-[80%] md:px-5 md:gap-5 md:flex md:flex-row md:justify-start md:mt-4">    
      {leagues.map(l => {
        console.log(l);
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
    </div>
  </div>
  )
}

export default InternationalCompetitions