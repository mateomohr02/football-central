import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const AdminStore = () => {

    const navigate = useNavigate()

    const user = useSelector(state => state.user.userProfile)

    if (user.role !== 'admin'){
        navigate('/404')
    }

  return (
    <div>AdminStore</div>
  )
}

export default AdminStore