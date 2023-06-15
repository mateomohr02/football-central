import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import style from './NavBar.module.css'
import usuario from  '../../assets/usuario.png'

import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  return (
    <div className={style.navContainer}>
      <div>
        <Link className={style.links} to='/home' ><img className={style.logo} src={logo} alt="Logo/Home"/></Link>
        <Link className={style.links} to='/competitions'>COMPETITIONS</Link>
        <Link className={style.links} to='/community'>Community</Link>
      </div>
      <div className={style.containerSearchAndUser}>
        <SearchBar/>
        
        <Link to='/'><img className={style.user} src={usuario} alt="Logo User"/></Link>

      </div>
    </div>
  )
}

export default Navbar