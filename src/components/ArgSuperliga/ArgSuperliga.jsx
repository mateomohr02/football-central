import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getStandingsLeague } from "../../redux/actions/getStandingsLeague";
import { getDetailLeague } from "../../redux/actions/getDetailLeague";
import { resetDetailLeague } from "../../redux/actions/resetDetailLeague";
import { resetStandingsLeague } from "../../redux/actions/resetStandingsLeague";

import style from "./ArgSuperliga.module.css";

const ArgSuperliga = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const standings = useSelector((state) => state.standings.standings);
  console.log("las standings", standings);

  useEffect(() => {
    dispatch(getDetailLeague(id));
    dispatch(getStandingsLeague(id));
    return () => {
      dispatch(resetDetailLeague());
      dispatch(resetStandingsLeague());
    };
  }, [dispatch, id]);

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h2>TABLA DE POSICIONES SUPERLIGA ARGENTINA</h2>
      <div className="w-[50%] mx-auto">
        <div>
          <table className="w-full">
            <thead className="bg-white border-b rounded-t rounded-xl">
              <tr className="flex flex-row ">
                <div className="w-[75%] bg-green-400 text-md flex justify-start items-center pl-10 font-medium text-gray-900 px-6 py-4 text-left">
                  <p>Equipo</p>
                </div>
                <div className="w-[25%] text-md flex justify-center items-center font-medium text-gray-900 px-6 py-4 text-left">
                  <p>Pts.</p>
                </div>
              </tr>
            </thead>
            <tbody>
              {standings.map((p) => {
                return (
                  <tr
                    key={p?.participant_id}
                    className="bg-gray-100 border-b flex"
                  >
                    <div className="bg-orange-500 w-[75%] flex justify-start items-center pl-3 gap-3">
                      <td className="py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <img
                          className="max-h-10"
                          src={p?.teamInfo?.image_path}
                          alt={`Escudo ${p?.teamInfo?.name}`}
                        />
                      </td>
                      <td className="py-4 whitespace-nowrap text-md font-medium text-gray-900">
                        {p?.teamInfo?.name}
                      </td>
                    </div>
                    <div className="bg-pink-500 w-[25%]">
                      <td className="py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {p?.points}
                      </td>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArgSuperliga;
