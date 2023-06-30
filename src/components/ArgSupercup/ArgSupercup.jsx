import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArgSupercup } from '../../redux/actions/getArgSupercup'
import { resetDetailCup } from '../../redux/actions/resetDetailCup'

const ArgSupercup = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getArgSupercup())
    return () => resetDetailCup()
  }, [dispatch])

  const final = useSelector(state => state.leagueCup.detailCup)

  return (
    <div>
      <h3>Final</h3>
      <div>
        <span><img src={final?.boca?.image_path} alt={final?.boca?.name} />{final?.name}<img src={final?.patronato?.image_path} alt={final?.patronato?.name}></img></span>
        <span>{final?.finalResult}</span>
      </div>
    </div>
  )
}

export default ArgSupercup