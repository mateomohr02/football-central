import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserRole } from "../../redux/actions/changeUserRole";
import { getUsersAdmin } from "../../redux/actions/getUsersAdmin";
import { resetChangedRole } from "../../redux/actions/resetRoleChanged";
import { deleteUser } from "../../redux/actions/deleteUser";
import { clearSearchedUsers } from "../../redux/actions/clearSearchedUsers";

const UpgradeUser = () => {
  const searchedUsers = useSelector((state) => state.user.searchedUsers);
  const roleChanged = useSelector((state) => state.user.roleChanged);

  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [updateUser, setUpdateUser] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUsersAdmin(input));
    
  };

  const handleClickSetAdmin = (userId) => {
    const data = {
      role: "admin",
    };
    dispatch(changeUserRole(userId, data));
    setUpdateUser(true);
  };

  const handleClickSetUser = (userId) => {
    const data = {
      role: "user",
    };
    dispatch(changeUserRole(userId, data));
    setUpdateUser(true);
  };
  

 useEffect(() => {
   if (roleChanged) {
     // Aquí actualizas searchedUsers
     dispatch(getUsersAdmin(input));
     dispatch(resetChangedRole());
   }
 }, [roleChanged]);
 
   const handleDeleteUser = (userId) => {
     dispatch(deleteUser(userId))
     dispatch(clearSearchedUsers());
   }
   
   
  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2 mx-auto">
        <input
          name="userSearchBar"
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Ingresa un UserName"
          className="rounded-l-lg border border-gray-300 py-2 px-4 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full"
          style={{ width: "100%" }}
        />
        <button
          onClick={handleSubmit}
          className="rounded-b-lg bg-blue-500 text-white py-2 px-4 mt-4"
          style={{ width: "30%" }}
        >
          Buscar
        </button>
      </div>
      <div className="mt-10">
        {searchedUsers ? (
          searchedUsers.map((user) => {
            return (
              <div key={user.id} className="items-center">
                <div>
                  <h4>
                    UserName: <strong>{user.username}</strong>
                  </h4>
                </div>
                <div>
                  <h4>
                    Actual Rol: <strong>{user.role}</strong>
                  </h4>
                </div>
                {user.role === "user" ? (
                  <button
                    onClick={() => handleClickSetAdmin(user.id)}
                    className="bg-red-500 text-white py-2 px-4 ml-2 mt-3"
                  >
                    Hacer Administrador
                  </button>
                ) : (
                  <button
                    onClick={() => handleClickSetUser(user.id)}
                    className="bg-red-500 text-white py-2 px-4 ml-2 mt-3"
                  >
                    Hacer User
                  </button>
                )}
                <div>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-blue-500 text-white py-2 px-4 ml-2 mt-3"
                  >
                    Borrar Usuario
                  </button>
                  <button className="bg-blue-500 text-white py-2 px-4 ml-2 mt-3">
                    Bannear
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <span>No se encontraron usuarios con este nombre</span>
        )}
      </div>
    </div>
  );
};

export default UpgradeUser;
