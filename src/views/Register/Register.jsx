import React from "react";
import { useState } from "react";
import validation from "./validation.js";
import style from "./Register.module.css"
import logo from "../../assets/logo.svg";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/register.js";
import { useNavigate } from "react-router-dom";



const Register = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
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
        <div className={style.mainContainer}>
            <img src={logo} alt="logo" className={style.logo} />
            <form onSubmit={handleSubmit} className={style.register}>
                <label htmlFor="user" className={style.label}>USERNAME: </label>
            <input type="text" name="username" placeholder="Ingresa tu nombre de usuario" value={userData.username} onChange={handleChange} className={style.input} />
                {errors.user && <p className={style.errors}>{errors.user}</p>}
                <label htmlFor="email" className={style.label}>E-MAIL: </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Ingresa tu email"
                    value={userData.email}
                    onChange={handleChange}
                    className={style.input}
                />
                {errors.email && <p className={style.errors}>{errors.email}</p>}
                <label htmlFor="password" className={style.label}>CONTRASEÑA: </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    value={userData.password}
                    onChange={handleChange}
                    className={style.input}
                />
                {errors.password && <p className={style.errors}>{errors.password}</p>}
                <div>
                    <button
                        className={style.button}

                    >
                        REGISTRARSE
                    </button>
                </div>
            </form>
        </div>
    )
}

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
