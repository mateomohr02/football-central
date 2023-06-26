import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
          <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">
            404
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">
            Page Not Found
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">
            Lo sentimos, la página que estabas buscando no existe.
          </p>
          <Link
            to='/inicio'
            className="flex items-center space-x-2 bg-pf-white hover:bg-blue-800 text-pf-blue px-4 py-2 rounded transition duration-150"
            title="Return Home"
          >
            <span>VOLVER AL INICIO</span>
          </Link>
        </div>
        <div className=" w-1/2 lg:h-full flex lg:items-end justify-center ">
          <img src= "https://i.ibb.co/ck1SGFJ/Group.png"alt="" className="w-[85%] pb-24"/>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
