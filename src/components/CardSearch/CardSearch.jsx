import React from 'react'
import style from './CardSearch.module.css'
const CardSearch = ({team}) => {

    console.log(team)
  return (
    <div className={style.card}>
        <span>
            {team?.name}
        </span>
        <img src={team?.image_path} alt={`Escudo ${team?.name}`} />
    </div>
  )
}

export default CardSearch