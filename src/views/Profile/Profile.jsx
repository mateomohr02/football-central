import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../redux/actions/getProfile";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user.userProfile);
  const dispatch = useDispatch();
  const loggedUserID = localStorage.getItem("id");
  console.log("LOGGED ID:", loggedUserID);

  useEffect(() => {
    dispatch(getProfile(loggedUserID)); // Verifica que loggedUserID tenga un valor válido
  }, [dispatch, loggedUserID]);
  console.log("loggedUserID:", loggedUserID);


  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-4xl mb-8">Profile</h1>
      <div className="bg-white rounded-lg p-8">
        <div>
          <h3>ID: {user?.id}</h3>
          <h3>UserName: {user.username}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Rol: {user.role}</h3>
          <h3>
            Premium: {user.isPremium === false ? "No" : "Si"}
            <span>
              {user?.isPremium === false
                ? <Link to="/premium">
                  <button className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Suscribirse
                  </button>
                </Link>
              : null
              }
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;