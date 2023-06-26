import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailCup } from '../../redux/actions/getDetailCups'
import { resetDetailCup } from '../../redux/actions/resetDetailCup'
import DetailCups from '../../components/DetailCups/DetailCups'
import KeyDefinition from '../../components/KeyDefinition/KeyDefinition'

const DetailCompetition = () => {
  
    const dispatch = useDispatch()

    const { id } = useParams()
    
    const cup = useSelector(state => state.leagueCup.detailCup)
    
    useEffect(()=>{
        dispatch(getDetailCup(id))

        return () => dispatch(resetDetailCup())
        
    },[dispatch, id])

    console.log(cup)

    return (
    <div>
      DetailCompetition {`${id}`}
      <DetailCups />
      <KeyDefinition />
    </div>
  )
}

export default DetailCompetition