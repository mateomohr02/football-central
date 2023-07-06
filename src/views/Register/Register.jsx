import React from "react";
import { useState } from "react";
import validation from "./validation.js";
import style from "./Register.module.css";
import logo from "../../assets/logo.svg";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/register.js";
import { useNavigate, Navigate } from "react-router-dom";
import background from '../../assets/landing/background.png'

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (isLoggedIn) {
    return <Navigate to="/inicio" replace />;
  }

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register(userData));
    navigate("/");
  };

  return (
    <div
     className={style.mainContainer}
    >
     
      <form
        onSubmit={handleSubmit}
        className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 h-[75%] flex flex-col justify-center items-start
            bg-white rounded-lg shadow-md lg:shadow-lg mx-auto mt-16"
      >
         <img src={logo} alt="logo" className="h-16 mx-auto my-3" />
        <h2 className="text-center mx-auto my-3 font-semibold text-3xl lg:text-4xl text-gray-800">
          Crea tu cuenta
        </h2>
        <label
          htmlFor="user"
          className="block text-xs font-semibold text-gray-600 uppercase"
        >
          USERNAME:{" "}
        </label>
        <input
          type="text"
          name="username"
          placeholder="Ingresa tu nombre de usuario"
          value={userData.username}
          onChange={handleChange}
          className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
        />
        {errors.user && <p className={style.errors}>{errors.user}</p>}
        <label
          htmlFor="email"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          E-MAIL:{" "}
        </label>
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          value={userData.email}
          onChange={handleChange}
          className="block w-full py-3 px-1 mt-2 
          text-gray-800 appearance-none 
          border-b-2 border-gray-100
          focus:text-gray-500 focus:outline-none focus:border-gray-200"
        />
        {errors.email && <p className={style.errors}>{errors.email}</p>}
        <label
          htmlFor="password"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          CONTRASEÑA:{" "}
        </label>
        <input
          type="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          value={userData.password}
          onChange={handleChange}
          className="block w-full py-3 px-1 mt-2 
          text-gray-800 appearance-none 
          border-b-2 border-gray-100
          focus:text-gray-500 focus:outline-none focus:border-gray-200"
        />
        {errors.password && <p className={style.errors}>{errors.password}</p>}
        <div className="w-full">
          <button
            className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
          >
            REGISTRARSE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
