import React from 'react'
import style from './CardLeagueCountry.module.css'


const CardLeaguesCountry = (l) => {
  return (
    <div className={style.cardLeague}>
        {/* Cada componente estaría envuelto en una etiqueta link que me lleve al detial de la liga */}
        <img src={l.image_path} alt={`Escudo ${l.name}`}></img>
        <span>{l.name}</span>
    </div>
  )
}

export default CardLeaguesCountry