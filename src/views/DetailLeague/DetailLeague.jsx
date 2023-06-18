import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailLeague } from '../../redux/actions/getDetailLeague'
import { resetDetailLeague } from '../../redux/actions/resetDetailLeague'

const DetailCompetition = () => {
  
    const dispatch = useDispatch()

    const { id } = useParams()
    
    const league = useSelector(state => state.detailLeague)
    
    useEffect(()=>{
        dispatch(getDetailLeague(id))

        return () => dispatch(resetDetailLeague())
        
    },[dispatch, id])

    console.log(league)

    return (
    <div>DetailCompetition {`${id}`}</div>
  )
}

export default DetailCompetition