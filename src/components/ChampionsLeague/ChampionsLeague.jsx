import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getChampions } from '../../redux/actions/getChampions';
import TableGroups from '../TableGroups/TableGroups'
import PlayOffMatchCard from '../PlayOffMatchCard/PlayOffMatchCard';


const ChampionsLeague = () => {
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getChampions())
  }, [dispatch])  

  const detailCup = useSelector(state => state.leagueCup.detailCup)

  return (
    <div>
      {/* CONTAINER GRUPOS */}
    <div>
        {
          detailCup?.groupStage?.map( g => {
              return (
              <TableGroups group = {g}/>
              )
          })
        }
    </div>

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

export default ChampionsLeague