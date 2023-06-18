import React from "react";
import { useState } from "react";
import validation from "./validation.js";
import style from "./Register.module.css"
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
        <div className={style.mainContainer}>
            <img src={logo} alt="logo" className={style.logo} />
            <form onSubmit={handleSubmit} className={style.register}>
                <label htmlFor="user" className={style.label}>USERNAME: </label>
                <input type="text" name="user" placeholder="Ingresa tu nombre de usuario" value={userData.name} onChange={handleChange} className={style.input} />
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
