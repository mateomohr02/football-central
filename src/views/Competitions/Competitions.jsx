import React from 'react'
import imgArg from '../../assets/banderas/argentina.jpg'
import imgAle from '../../assets/banderas/alemania.jpg'
import imgIng from '../../assets/banderas/inglaterra.jpg'
import imgInt from '../../assets/banderas/internacional.jpeg'
import style from './Competitions.module.css'

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
            <img className={style.img} src={imgArg} alt="argentina"/>
          </div>
          <div className={style.league}>
            <img className={style.img} src={imgAle} alt="alemania"/>
          </div>
          <div className={style.league}>
            <img className={style.img} src={imgIng} alt="inglaterra"/>
          </div>
          <div className={style.league}>
            <img className={style.img} src={imgInt} alt="internacional"/>
          </div>
          
        </div>
       
        
      </div>
    </div>
  )
}

export default Competitions