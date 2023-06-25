import React, { useState } from "react"
import ImageIcon from '@mui/icons-material'
import style from "./ProfileInfo.module.css"

const ProfileInfo = () => {

    const [frontPage, setFrontPage] = useState('');
    const [profileImage, setProfileImage] = useState('');

    const handleImage = (event) => {
        setFrontPage({
            ...frontPage,
            [event.target.text]: event.target.value,
        });
        setProfileImage({
            ...profileImage,
            [event.target.text]: event.target.value
        })
        
    } 

    return (
        <div className={style.mainContainer}>
            <div className={style.portadaContainer}>
                <ImageIcon />
                <input
                    type='text'
                    placeholder='subir imagen'
                    onChange={handleImage}
                    value={frontPage}
                />
            </div>
            <div className={style.imgProfile}>
                <ImageIcon />
                <input
                    type='text'
                    placeholder='subir imagen'
                    onChange={handleImage}
                    value={profileImage}
                />
                <h3>NOMBRE USUARIO</h3>
                <h4>seguidos</h4>
                <h4>seguidores</h4>

            </div>

        </div>
    )
}

export default ProfileInfo;
