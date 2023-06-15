import React, { useState } from 'react'
import style from './SearchBar.module.css'
import lupa from '../../assets/lupa.png'
import { useDispatch }from 'react-redux'
import { searchTeam } from '../../redux/actions/searchTeamLeague.js'

const SearchBar = () => {

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(searchTeam(search))
    setSearch("")
  }

  return (
    <div className={style.searchBar}>
    <input value={search}type="text" onChange={handleChange} className={style.searchInput} placeholder="Buscar equipo" />
    <button onClick={handleSubmit} className={style.searchButton}>
      <img className={style.img} src={lupa} alt="Lupa" />
    </button>
  </div>
  )
}

export default SearchBar