import React from 'react'
import style from './Competitions.module.css'

const Competitions = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.buttonContainer}>
        <button className={style.button} type='button'>PAISES</button>
        <button className={style.button} type='button'>SORTER A-Z</button>
      </div>
      <div className={style.secondContainer}>
        <div className={style.containerCountries}>
          <div>INTERNACIONAL</div>
          <div>ARGENTINA</div>
          <div>ALEMANIA</div>
          <div>BANDERA PAIS</div>
          <div>BANDERA PAIS</div>
          <div>BANDERA PAIS</div>
          <div>BANDERA PAIS</div>
          <div>BANDERA PAIS</div>
          <div>BANDERA PAIS</div>
          <div>BANDERA PAIS</div>
          <div>BANDERA PAIS</div>
          <div>BANDERA PAIS</div>
          <div>BANDERA PAIS</div>
          <div>BANDERA PAIS</div>
        </div>
        <div className={style.scroller}></div>
      </div>
    </div>
  )
}

export default Competitions