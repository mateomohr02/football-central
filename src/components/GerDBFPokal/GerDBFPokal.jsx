import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGerDBFPokal } from '../../redux/actions/getGERDBFPokal'
import { resetDetailCup } from '../../redux/actions/resetDetailCup'
import PlayOffMatchCard from '../PlayOffMatchCard/PlayOffMatchCard';


const GerDBFPokal = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getGerDBFPokal())
    return () => resetDetailCup()
  }, [dispatch])

  const detailCup = useSelector(state => state.leagueCup.detailCup)

  return (
    <div>
      {/* OCTAVOS */}
    <div>
    <h3>Octavos de Final</h3>
      <PlayOffMatchCard
      arrMatches={detailCup?.quarterFinals}
      />
    </div>
    {/* CUARTOS */}
    <div>
    <h3>Cuarts de Final</h3>
      <PlayOffMatchCard
      arrMatches={detailCup?.quarterFinals}
      />
    </div>
    {/* SEMIFINAL */}
    <div>
    <h3>Semi-Final</h3>
      <PlayOffMatchCard
      arrMatches={detailCup?.semiFinal}
      />
    </div>
    {/* FINAL */}
    <div>
      <h3>Final</h3>
      <PlayOffMatchCard
      arrMatches={detailCup?.final}
      />
    </div>
    </div>
  )
}

export default GerDBFPokal