import React from "react";
import { useState } from "react";
import validation from "./validation.js";
import style from "./Login.module.css";


const Login = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
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
    login(userData);
  };
  return (
    <div>
      {/* faltan estilos */}
      <form onSubmit={handleSubmit} className={style.login}>
       

        <label htmlFor="email">E-MAIL: </label>
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          value={userData.email}
          onChange={handleChange}
          className={style.input}
        />
        {errors.email && <p className={style.errors}>{errors.email}</p>}
       

        <label htmlFor="password">CONTRASEÑA: </label>
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
            INICIAR SESIÓN
          </button>
        </div>
        <div className={style.helpContainer}>
          <h5 className={style.helpLinks}>¿OLVIDASTE TU CONTRASEÑA?</h5>
          <h5 className={style.helpLinks}>¿NO TIENES UNA CUENTA? REGISTRATE</h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
