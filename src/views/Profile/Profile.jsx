import React, { useState } from 'react'
import style from './Profile.module.css'
import ProfilePost from '../../components/ProfilePost/ProfilePost'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import ProfileChat from '../../components/ProfileChat/ProfileChat'
import ContactList from '../../components/ProfileChat/ProfileContactos';
import ProfilePremium from '../../components/ProfilePremium/ProfilePremium'
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'

const Profile = () => {

  const [selectedContact, setSelectedContact] = useState(null);

  const handleSelectedContact = (contact) => {
    setSelectedContact(contact)
  }
  const contacts = [
    { id: contact.id, name: contact.name }
  ]

  return (
    <div className="bg-pf-grey md:h-screen">
      <NavBar />
      <div className={style.ProfileInfo}>
        <ProfileInfo />
        <div className="flex ml-auto">
          <Link className="inline-flex text-xs sm:text-sm text-white hover:text-blue-700">
            <ProfilePremium/>
          </Link>
        </div>
      </div>
      <h3>PUBLICACIONES</h3>
      <div className={style.ProfilePost}>
        <ProfilePost />
      </div>
      <h3>CHAT</h3>
      <div className={style.ProfileChat}>
        <ContactList contacts={contacts} onSelectContact={handleSelectedContact}/>
        {selectedContact && <ProfileChat selectedContact={selectedContact} />}
      </div>


    </div>
  );
}

export default Profile