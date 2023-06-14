import React from "react";
import { useState } from "react";
import validation from "./validation.js";
import style from "./Login.module.css";
import { Button, Form } from "react-bootstrap";

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
      <Form onSubmit={handleSubmit} className={style.login}>
        <label htmlFor="email">E-MAIL: </label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor="password">CONTRASEÑA: </label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <div>
          <Button variant="primary" className={style.button}>
            LOGIN
          </Button>
        </div>
        <div>
          <h2>¿OLVIDASTE TU CONTRASEÑA?</h2>
          <h3>¿NO TIENES UNA CUENTA? REGISTRATE</h3>
        </div>
      </Form>
    </div>
  );
};

export default Login;
