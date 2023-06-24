import React, { useState, useRef } from "react"
import Form from "react-validation/build/form.js";
import Input from "react-validation/build/input.js";
import CheckButton from "react-validation/build/button.js"
import { isEmail } from "validator";
import style from "./Register.module.css"
import logo from "../../assets/logo.svg";

import AuthService from "../../components/Service/AuthService.js";

const required = (value) => {
    if (!value) {
        return (
            <div className="invalid-feedback d-block">
                This field is required
            </div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="invalid-feedback d-block">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="invalid-feedback d-block">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="invalid-feedback d-block">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const Register = ({ register }) => {

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("")

    const onChangeUsername = (event) => {
        const username = event.target.value;
        setUsername(username);
    };

    const onChangeEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
    };

    const onChangePassword = (event) => {
        const password = event.target.value;
        setPassword(password);
    };

    const handleRegister = (event) => {
        event.preventDefault();

        setMessage("");
        setSuccesful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };



    return (
        <div className={style.mainContainer}>
            <img src={logo} alt="logo" className={style.logo} />
            <form onSubmit={handleRegister} ref={form} className={style.register}>

                <label htmlFor="user" className={style.label}>USERNAME: </label>
                <input type="text" name="user" placeholder="Ingresa tu nombre de usuario" value={username} onChange={onChangeUsername} validations={[required, vusername]} className={style.input} />
                {errors.user && <p className={style.errors}>{errors.user}</p>}
                <label htmlFor="email" className={style.label}>E-MAIL: </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Ingresa tu email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                    className={style.input}
                />
                {errors.email && <p className={style.errors}>{errors.email}</p>}
                <label htmlFor="password" className={style.label}>CONTRASEÑA: </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
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
