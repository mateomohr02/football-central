import React, { useState } from 'react'
import { useDispatch } from "react-redux";

const UpgradeUser = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value);
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
      };
    
    
  return (
    <div>
        <label htmlFor="userSearchBar">Username: </label>
        <input 
        name="userSearchBar"
        type="text"
        value={input}
        onChange={handleChange}
        placeholder='Buscar'
        />
    </div>
  )
}

export default UpgradeUser