import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { searchTeam } from "../../redux/actions/searchTeamLeague";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTeam(search));
    navigate("/search");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="flex h-10">
      <input
        value={search}
        type="text"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="flex justify-between text-right sm:w-full py-2 pl-10 pr-4 text-black bg-pf-white border rounded-lg dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none  focus:ring-opacity-40 focus:ring-blue-300"
        placeholder="Buscar"
      />

      <button
        onClick={handleSubmit}
        className="hidden sm:block bg-pf-white dark:border-gray-600 border rounded-lg h-10 w-12 sm:h-10 sm:w-12 ml-1"
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;

