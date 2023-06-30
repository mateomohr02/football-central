import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArgSupercup } from '../../redux/actions/getCommunityShield'
import { resetDetailCup } from '../../redux/actions/resetDetailCup'

const EngCommunityShield = () => {

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
        <span><img src={final?.liverpool?.image_path} alt={final?.liverpool?.name} />{final?.name}<img src={final?.manchesterCity?.image_path} alt={final?.manchesterCity?.name}></img></span>
        <span>{final?.finalResult}</span>
      </div>
    </div>
  )
}

export default EngCommunityShield