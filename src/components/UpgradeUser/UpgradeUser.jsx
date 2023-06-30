import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { getUsersAdmin } from '../../redux/actions/getUsersAdmin'
import { changeUserRole } from '../../redux/actions/changeUserRole';
import { resetChangedRole } from '../../redux/actions/resetRoleChanged';


const UpgradeUser = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value);
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getUsersAdmin(input))
      };
    
    const searchedUsers = useSelector(state => state.user.searchedUsers)

    const handleClickSetAdmin = (userId) => {
      dispatch(changeUserRole(userId))
    }

    useEffect(() => {
      return () => resetChangedRole()
    }, [dispatch])

    const roleChanged = useSelector(state => state.user.roleChanged)

    if (roleChanged) alert('Rol del usuario cambiado con éxito')

  return (
    <div>
    <div>
        <input 
        name="userSearchBar"
        type="text"
        value={input}
        onChange={handleChange}
        placeholder='Ingresa un UserName'
        />
        <button onClick={handleSubmit}>Buscar</button>
    </div>
    <div>
      {searchedUsers ? searchedUsers.map(user => {
        return (
        <div>
          <p>{user.username}</p>
          <p>{user.role}</p>
          <p>{user.id}</p>
          <button onClick={handleClickSetAdmin(user.id)}>Hacer Administrador</button>
        </div>
      )}):<span>No se encontraron usuarios con este nombre</span>}
    </div>
    </div>
  )
}

export default UpgradeUser