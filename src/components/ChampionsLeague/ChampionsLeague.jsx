import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChampions } from "../../redux/actions/getChampions";
import TableGroups from "../TableGroups/TableGroups";
import PlayOffMatchCard from "../PlayOffMatchCard/PlayOffMatchCard";
import { resetInternationalLeague } from "../../redux/actions/resetInternationalLeague";

const ChampionsLeague = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChampions());
    return () => {
      dispatch(resetInternationalLeague());
    };
  }, [dispatch]);

  const detailCup = useSelector((state) => state.leagueCup.detailCup);
  console.log('detail cup',detailCup)
  return (
    <div >
      {/* CONTAINER GRUPOS */}
      <div className=" rounded-xl mt-5 mx-auto w-[95%] h-[780px] ml-auto flex flex-wrap">
        {detailCup?.groupStage?.map((g) => {
          return <TableGroups group={g} />;
        })}
      </div>

        <div className="mt-10 rounded-xl mx-auto w-[95% text-white] flex flex-row justify-start items-center">
      {/* OCTAVOS */}
      <div className=" w-[25%] flex flex-col justify-center">
        <h3 className="mx-auto text-white">Octavos de Final</h3>
        <PlayOffMatchCard arrMatches={detailCup?.roundOf16} />
      </div>

      {/* CUARTOS */}
      <div className=" w-[25%] flex flex-col justify-center ">
        <h3 className="mx-auto text-white">Cuartos de Final</h3>
        <PlayOffMatchCard arrMatches={detailCup?.quarterFinals} />
      </div>
      {/* SEMIFINAL */}
      <div className="w-[25%] flex flex-col justify-center">
        <h3 className="mx-auto text-white">Semi-Final</h3>
        <PlayOffMatchCard arrMatches={detailCup?.semiFinal} />
      </div >
      {/* FINAL */}
      <div className="w-[25%] flex flex-col justify-center">
        <h3 className="mx-auto text-white">Final</h3>
        <PlayOffMatchCard arrMatches={detailCup?.final} />
      </div>
      </div>
    </div>
  );
};

export default ChampionsLeague;
