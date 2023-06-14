import React from 'react'
import style from './SearchBar.module.css'
import lupa from '../../assets/lupa.png'

const SearchBar = () => {
  return (
    <div className={style.searchBar}>
    <input type="text" className={style.searchInput} placeholder="Buscar equipo/liga..." />
    <button className={style.searchButton}>
      <img className={style.img} src={lupa} alt="Lupa" />
    </button>
  </div>
  )
}

export default SearchBar