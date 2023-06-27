import React from 'react'
import { useParams } from 'react-router-dom'

import ArgSuperliga from '../../components/ArgSuperliga/ArgSuperliga'
import ArgSupercup from '../../components/ArgSupercup/ArgSupercup'

const DetailLeague = () => {

    const { id } = useParams()    

    return (
    <div>
      {id === "636"? <ArgSuperliga/> : ""}
      {id === '1502' ? <ArgSupercup/> : ""}
    </div>
  )
}

export default DetailLeague