import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
/* import style from "./NavBar.module.css"; */
import { useState } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <Link to="/home">
            <img
              className="w-auto h-9 pl-3 sm:pl-0 sm:h-12"
              src={logo}
              alt=""
            />
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden ">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}

              {isOpen && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className=" flex w-full items-end flex-col pr-2 mx-4 md:flex-row md:justify-end md:items-center md:mr-6 md:py-0">
            
            <Link
              to="/"
              className=" h-12 w-12 flex justify-center items-center sm:absolute -right-6"
            >
              <AccountCircleIcon
                fontSize="large"
                className=" text-pf-white text-2xl "
              />
            </Link>

            <Link
              to="/competitions"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2 "
            >
              Competiciones
            </Link>
            <Link
              to="/community"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2 "
            >
              Comunidad
            </Link>
            <Link
              to="#"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
            >
              Noticias
            </Link>
            <div className="relative mt-4 md:mt-0 pr-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <SearchBar className=" w-16 pr-2" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
