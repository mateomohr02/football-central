import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getChampions } from '../../redux/actions/getChampions';
import TableGroups from '../TableGroups/TableGroups'


const ChampionsLeague = () => {
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getChampions())
  }, [dispatch])  

  const detailGroups = useSelector(state => state.leagueCup.detailCup)

  return (
    <div>
      {/* CONTAINER GRUPOS */}
    <div>
        {
          detailGroups.map( g => {
              return (
              <TableGroups group = {g}/>
              )
          })
        }
    </div>

    {/* ELIMINATORIAS */}
    </div>
  )
}

export default ChampionsLeague