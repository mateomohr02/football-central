import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className={style.navContainer}>

      <Link className={style.links} to="/home">
        <img className={style.logo} src={logo} alt="Logo/Home" />
      </Link>
      <div className={style.containerLeft}>
        <Link className={style.links} to="/competitions">
          COMPETITIONS
        </Link>
        <Link className={style.links} to="/community">
          COMMUNITY
        </Link>

      </div>
      <div className={style.containerSearchAndUser}>
        <SearchBar />

        <Link to="/" className={style.user}>
          <AccountCircleIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
