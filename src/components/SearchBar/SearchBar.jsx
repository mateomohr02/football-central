
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import style from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { searchTeam } from "../../redux/actions/searchTeamLeague";
//crear action


const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const [search, setSearch] = useState("");
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTeam(search));
    navigate('/search')
  };

  return (
    <div className={style.searchBar}>
      <input
        value={search}
        type="text"
        onChange={handleChange}
        className={style.searchInput}
        placeholder="Buscar equipo"
      />
      <button onClick={handleSubmit} className={style.searchButton}>
        <SearchIcon/>
      </button>
    </div>
  );
};


export default SearchBar;
