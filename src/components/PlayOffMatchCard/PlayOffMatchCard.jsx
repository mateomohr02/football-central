import React from "react";
import { v4 as uuidv4 } from "uuid";

const PlayOffMatchCard = ({ arrMatches }) => {
  return (
    /* container */
    <div key={uuidv4()} className=" w-80 ml-3  ">
      {arrMatches?.map((match) => {
        return (
          <div key={uuidv4()} className="flex flex-row my-5 bg-gray-200 rounded-xl shadow-sm shadow-gray-100">
            <div className="flex flex-col w-[70%] ">
              <div className="h-[50%] flex flex-row border-b border-pf-blue justify-start items-center pl-1 py-1 gap-1">
                <img
                  src={match?.teams?.teamData[0]?.image_path}
                  alt={`Escudo ${match?.teams?.teamData[0]?.name}`}
                  className="max-h-10"
                />
                <p>{match?.teams?.teamData[0]?.name}</p>
              </div>
              <div className="h-[50%] flex flex-row justify-start items-center pl-1 py-1 gap-1">
                <img
                  src={match?.teams?.teamData[1]?.image_path}
                  alt={`Escudo ${match?.teams?.teamData[1]?.name}`}
                  className="max-h-10"
                />
                <p>{match?.teams?.teamData[1]?.name}</p>
              </div>
            </div>

            <div className=" w-[30%] flex">
              <div className=" w-[20%] flex flex-col gp-3">
                <p className="h-[50%] flex justify-center items-center font-medium border-b border-pf-blue">{match?.lastMatchResult.split("-")[0].trim()}</p>
                <p className="h-[50%] flex justify-center items-center font-medium ">{match?.lastMatchResult.split("-")[1].trim()}</p>
              </div>
              <div className="border-l border-pf-blue w-[80%] flex flex-col justify-center items-center">
                <p>Final</p>
                <p>{match?.finalResult}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlayOffMatchCard;
