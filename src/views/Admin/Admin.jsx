import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UpgradeUser from '../../components/UpgradeUser/UpgradeUser'
import StoreManagerAdmin from '../../components/StoreManagerAdmin/StoreManagerAdmin'

const Admin = () => {

    const navigate = useNavigate()

    const user = useSelector(state => state.user.userProfile)

    if (user.role !== 'admin'){
        navigate('/404')
    }

  return (
    <div>
        <UpgradeUser/>
        <br />
        <StoreManagerAdmin/>
    </div>
  )
}

export default Admin