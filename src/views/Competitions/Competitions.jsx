import React from 'react'
import imgArg from '../../assets/banderas/argentina.jpg'
import imgAle from '../../assets/banderas/alemania.jpg'
import imgIng from '../../assets/banderas/inglaterra.jpg'
import imgInt from '../../assets/banderas/internacional.jpeg'
import style from './Competitions.module.css'

import { Link } from 'react-router-dom'



const Competitions = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.secondContainer}>
        <div className={style.buttonContainer}>
          <button className={style.button} type='button'>PAISES</button>
          <button className={style.button} type='button'>SORTER A-Z</button>
        </div>
        <div className={style.containerLeagues}>
          <div className={style.league}>
            <Link to="/competitions/country/44">
            <img className={style.img} src={imgArg} alt="argentina"/>
            </Link>
          </div>
          <div className={style.league}>
            <Link to="/competitions/country/11">  
            <img className={style.img} src={imgAle} alt="alemania"/>
            </Link>
          </div>
          <div className={style.league}>
            <Link to="/competitions/country/462">
            <img className={style.img} src={imgIng} alt="inglaterra"/>
            </Link>
          </div>
          <div className={style.league}>
            <Link to="/competitions/country/2">
            <img className={style.img} src={imgInt} alt="internacional"/>
            </Link>
          </div>
          
        </div>
       
        
      </div>
    </div>
  )
}

export default Competitions