import React from 'react'

import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import ProfilePost from '../../components/ProfilePost/ProfilePost'

console.log(localStorage)

const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <ProfilePost/>                                                         
    </div>
  )
}

export default Profile