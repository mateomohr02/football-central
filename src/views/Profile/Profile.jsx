import React from 'react'
import ProfilePost from '../../components/ProfilePost/ProfilePost'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import ProfileChat from '../../components/ProfileChat/ProfileChat'
import NavBar from '../../components/NavBar/NavBar'

const Profile = () => {
  return (
    <div className="bg-pf-grey md:h-screen">
      <NavBar/>
      <ProfileInfo/>
      <ProfilePost/>
      <ProfileChat/>

    </div>
  )
}

export default Profile