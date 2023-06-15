
import React, { useState } from "react";
import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
//crear action


const SearchBar = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    dispatch();
  };

  return (
    <div className={style.searchBar}>
      <input
        value={search}
        type="text"
        onChange={handleChange}
        className={style.searchInput}
        placeholder="Buscar equipo/liga..."
      />
      <button onClick={handleSubmit} className={style.searchButton}>
        <SearchIcon/>
      </button>
    </div>
  );
};


export default SearchBar;
