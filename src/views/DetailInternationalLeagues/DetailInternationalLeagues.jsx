import React from 'react'
import { useParams } from 'react-router-dom'

import ChampionsLeague from '../../components/ChampionsLeague/ChampionsLeague'

const DetailInternationalLeagues = () => {

    const { id } = useParams()

  return (
    id === "2"? <ChampionsLeague/> : ""
  )
}

export default DetailInternationalLeagues