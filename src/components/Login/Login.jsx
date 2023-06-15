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
       

        <Form.Label htmlFor="email">E-MAIL: </Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          value={userData.email}
          onChange={handleChange}
          className={style.input}
        />
        {errors.email && <p className={style.errors}>{errors.email}</p>}
       

        <Form.Label htmlFor="password">CONTRASEÑA: </Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          value={userData.password}
          onChange={handleChange}
          className={style.input}
        />
        {errors.password && <p className={style.errors}>{errors.password}</p>}
      
        <div>
          <Button
            className={style.button}
            style={{ backgroundColor: "var(--white)", color: "black" }}
          >
            INICIAR SESIÓN
          </Button>
        </div>
        <div className={style.helpContainer}>
          <h5 className={style.helpLinks}>¿OLVIDASTE TU CONTRASEÑA?</h5>
          <h5 className={style.helpLinks}>¿NO TIENES UNA CUENTA? REGISTRATE</h5>
        </div>
      </Form>
    </div>
  );
};

export default Login;
