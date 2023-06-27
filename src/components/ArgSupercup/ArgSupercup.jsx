import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getStandingsLeague } from '../../redux/actions/getStandingsLeague'
import { getDetailLeague } from '../../redux/actions/getDetailLeague'
import { resetDetailLeague } from '../../redux/actions/resetDetailLeague'
import { resetStandingsLeague } from '../../redux/actions/resetStandingsLeague'


const ArgSupercup = () => {

    // const dispatch = useDispatch()
    // const {id} = useParams()
    // const standings = useSelector(state => state.standings.standings)

    // useEffect(()=>{
    //     dispatch(getDetailLeague(id))
    //     dispatch(getStandingsLeague(id))
    //     return () => {
    //         dispatch(resetDetailLeague());
    //         dispatch(resetStandingsLeague())
    //       }
    // },[dispatch, id])

  return (
    <div>ArgSupercup</div>
  )
}

export default ArgSupercup