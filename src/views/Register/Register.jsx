import React from "react";
import { useState } from "react";
import validation from "./validation.js";
import style from "./Register.module.css";
import logo from "../../assets/logo.svg";

const Register = ({ register }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    user: "",
    email: "",
    password: "",
  });

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
    register(userData);
  };
  return (
    <div className=" md:h-[90vh] flex md:flex-col md:justify-center items-start">
      <div className="container mx-auto py-8">
        <img src={logo} alt="logo" className="md:w-[20vw] mx-auto pb-5" />
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">
            FORMULARIO DE REGISTRO
          </h1>
          <div className="mb-4">
            <label
              htmlFor="user"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              USUARIO:{" "}
            </label>
            <input
              type="text"
              name="user"
              placeholder="Ingresa tu nombre de usuario"
              value={userData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
            {errors.user && <p className={style.errors}>{errors.user}</p>}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              E-MAIL:{" "}
            </label>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu email"
              value={userData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
            {errors.email && <p className={style.errors}>{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              CONTRASEÑA:{" "}
            </label>
            <input
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              value={userData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
            {errors.password && (
              <p className={style.errors}>{errors.password}</p>
            )}
          </div>

          <div>
            <button
              className="w-full bg-pf-blue text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
              type="submit"
            >
              REGISTRARSE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

/* 
<div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
      <form
        className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Usuario
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="name"
            name="name"
            placeholder="Ingresa tu nombre de usuario"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
*/
