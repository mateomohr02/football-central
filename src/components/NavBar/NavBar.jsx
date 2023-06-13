import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to='/home'><img src={logo} alt="Logo/Home"/></Link>
        <Link to='/competitions'>Competitions</Link>
        <Link to='/community'>Community</Link>
      </div>
      
      <Link to='/'></Link>

    </div>
  )
}

export default Navbar