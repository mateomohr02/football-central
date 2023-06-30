import React from 'react'
import { useParams } from 'react-router-dom'

import ChampionsLeague from '../../components/ChampionsLeague/ChampionsLeague'
import EuropaLeague from '../../components/EuropaLeague/EuropaLeague'

const DetailInternationalLeagues = () => {

    const { id } = useParams()

  return (
    id === "2"? <ChampionsLeague/> : (id === "5"? <EuropaLeague/> : "")
  )
}

export default DetailInternationalLeagues