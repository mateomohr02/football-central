import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailCup } from '../../redux/actions/getDetailCups'
import { resetDetailCup, resetDetailLeague } from '../../redux/actions/resetDetailCup'

const DetailCompetition = () => {
  
    const dispatch = useDispatch()

    const { id } = useParams()
    
    const cup = useSelector(state => state.detailCup)
    
    useEffect(()=>{
        dispatch(getDetailCup(id))

        return () => dispatch(resetDetailCup())
        
    },[dispatch, id])

    console.log(cup)

    return (
    <div>DetailCompetition {`${id}`}</div>
  )
}

export default DetailCompetition