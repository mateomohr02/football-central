import React from "react";
/* import imgArg from "../../assets/banderas/argentina.jpg";
import imgAle from "../../assets/banderas/alemania.jpg";
import imgIng from "../../assets/banderas/inglaterra.jpg"; */
import imgInt from "../../assets/banderas/Int.png";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import { Link } from "react-router-dom";
import DropdownButton from "../../components/Dropdownbutton/DropdownButton";

const Competitions = () => {
  return (
    <div className=" md:h-[90vh] md:overflow-hidden md:flex md:justify-center md:items-center ">
      <div className="bg-pf-blue md:w-[90%] md:h-[90%] md:rounded-xl">
        <div className=" md:flex md:justify-end md:items-center md:pr-5 md:flex-row md:gap-x-5 md:h-[12%] md:w-[98%] md:mx-auto md:mb-5 border-b-2 ">
          <div className="md:pl-5 md:w-[50%]">
            <Breadcrumb />
          </div>
          <div className=" md:w-[50%] md:flex md:justify-end md:gap-x-5">
            <DropdownButton buttonLabel="Ordenar" options={["A-Z", "Z-A"]} showIcon={true}/>
          </div>
        </div>
        <div className=" md:w-full md:h-[80%] md:px-5 md:gap-5 md:flex md:flex-row md:justify-start">
          <div className="md:w-36 md:h-28 md:rounded-2xl bg-pf-white md:flex md:flex-col md:gap-2 md:justify-center md:items-center transform hover:scale-[101%] transition-all duration-300">
            <Link to="/competitions/countries/44">
              <img
                className="md:w-[70%] md:mx-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
                alt="argentina"
              />
            </Link>
          </div>

          <div className="md:w-36 md:h-28 md:rounded-2xl bg-pf-white md:flex md:justify-center md:items-center transform hover:scale-[101%] transition-all duration-300">
            <Link to="/competitions/countries/11">
              <img
                className="md:w-[70%] md:mx-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
                alt="alemania"
              />
            </Link>
          </div>
          <div className="md:w-36 md:h-28 md:rounded-2xl bg-pf-white md:flex md:justify-center md:items-center transform hover:scale-[101%] transition-all duration-300">
            <Link to="/competitions/countries/462">
              <img
                className="md:w-[70%] md:mx-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg"
                alt="inglaterra"
              />
            </Link>
          </div>
          <div className="md:w-36 md:h-28 md:rounded-2xl bg-pf-white md:flex md:justify-center md:items-center transform hover:scale-[101%] transition-all duration-300">
            <Link to="/competitions/international">
              <img
                className="md:w-[60%] md:mx-auto"
                src={imgInt}
                alt="internacional"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
