import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UpgradeUser from '../../components/UpgradeUser/UpgradeUser'

const Admin = () => {

    const navigate = useNavigate()

    /*
    const user = useSelector(state => state.user.userProfile)

    if (user.role !== 'admin'){
        navigate('/404')
    }
    */

  return (
    <div>
        <UpgradeUser/>
    </div>
  )
}

export default Admin