import React from "react";
import { useState } from "react";
import validation from "./validation.js";
import style from "./Login.module.css";
import { Link } from "react-router-dom";

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
      <form
        onSubmit={handleSubmit}
        className="min-h-screen flex flex-col items-start justify-center ml-60 mt-20 "
      >
        <div className="flex flex-col shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md"> {/* form container */}

          <div className="flex flex-col mb-6"> {/* container email */}
            <label
              htmlFor="email"
              className="mb-1 text-medium sm:text-[15px] tracking-wide text-white"
            >
              E-MAIL:{" "}
            </label>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu email"
              value={userData.email}
              onChange={handleChange}
              className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
            />
            {errors.email && <p className={style.errors}>{errors.email}</p>}
          </div>


          <div className="flex flex-col mb-6"> {/* container password */}
            <label
              htmlFor="password"
              className="mb-1 text-medium sm:text-[15px] tracking-wide text-white"
            >
              CONTRASEÑA:{" "}
            </label>
            <input
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              value={userData.password}
              onChange={handleChange}
              className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
            />
            {errors.password && (
              <p className={style.errors}>{errors.password}</p>
            )}
          </div>


          <div className="flex items- mb-6 -mt-4"> {/* container help link password */}
            <div className="flex ml-auto">
              <Link className="inline-flex text-xs sm:text-sm text-white hover:text-blue-700">
                ¿OLVIDASTE TU CONTRASEÑA?
              </Link>
            </div>
          </div>


          <div className="flex w-full justify-center"> {/* container button login */}
            <button
              type="submit"
              className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-pf-white hover:bg-blue-900 rounded py-2 w-8/12 transition duration-150 ease-in"
            >
              <span className="mr-2 uppercase text-black font-medium">Login</span>
              <span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke='black'
                >
                  <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </div>


          <div className="flex justify-center items-center mt-6"> {/* container help link not account */}
            <Link className="inline-flex items-center font-bold text-white hover:text-blue-700 text-xs text-center">
              <span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </span>
              <span className="ml-2">¿NO TIENES UNA CUENTA? REGÍSTRATE</span>
            </Link>
          </div>


        </div>
      </form>
    </div>
  );
};

export default Login;
