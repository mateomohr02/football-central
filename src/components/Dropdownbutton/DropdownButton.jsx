import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

const DropdownButton = ({ buttonLabel, options, showIcon }) => {
  const [isOpen, setIsOpen] = useState(false);
 
   

  

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };


  

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none duration-600"
          id="options-menu"
          onClick={handleToggleMenu}
        >
          {buttonLabel}
          {showIcon && <ArrowDropDownRoundedIcon />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <Link
                to="#"
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
                key={index}
                onClick={handleToggleMenu}
              >
                <span className="flex flex-col">
                  <span className="text-white">{option}</span> {/* Aquí se muestra cada opción individual */}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
