import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getLivescoresLatest } from "../../redux/actions/getLivescoresLatest";
import { resetLivescores } from "../../redux/actions/resetLivescores";

const DetailLivescore = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("resumen");

  const showAlineaciones = activeTab === "alineaciones";

  useEffect(() => {
    setInterval(() => {
      dispatch(getLivescoresLatest());
    }, 15000);
    return () => {
      dispatch(resetLivescores());
    };
  }, [dispatch, id]);

  const livescores = useSelector((state) => state.livescores.detailLivescores);
  const match = livescores.find((obj) => obj.id === Number(id));

  const homeId =
    match.participants?.[0].meta?.location === "home"
      ? match.participants?.[0]?.id
      : match.participants?.[1]?.id;

  const home = {
    name:
      match.name.split("vs")[0].trim() ||
      match.participants?.[0]?.name ||
      "Home",
    logo: match.participants?.[0]?.image_path || "",
    score:
      match.scores.find(
        (item) =>
          item.description === "CURRENT" && item.score.participant === "home"
      )?.score?.goals || 0,

    lineup: match.lineups
      ?.filter(
        (player) =>
          player.team_id === homeId && player.formation_position !== null
      )
      .sort((a, b) => a.formation_position - b.formation_position)
      .map((player) => `${player.jersey_number} - ${player.player_name}`),

    substitutes: match.lineups
      ?.filter(
        (player) =>
          player.team_id === homeId && player.formation_position === null
      )
      .map((player) => `${player.jersey_number} - ${player.player_name}`),
  };

  const awayId =
    match.participants?.[0].meta?.location === "away"
      ? match.participants?.[0]?.id
      : match.participants?.[1]?.id;

  const away = {
    name:
      match.name.split("vs")[1].trim() ||
      match.participants?.[1]?.name ||
      "Away",
    logo: match.participants?.[1]?.image_path || "",
    score:
      match.scores.find(
        (item) =>
          item.description === "CURRENT" && item.score.participant === "away"
      )?.score?.goals || 0,

    lineup: match.lineups
      ?.filter(
        (player) =>
          player.team_id === awayId && player.formation_position !== null
      )
      .sort((a, b) => a.formation_position - b.formation_position)
      .map((player) => `${player.jersey_number} - ${player.player_name}`),

    substitutes: match.lineups
      ?.filter(
        (player) =>
          player.team_id === awayId && player.formation_position === null
      )
      .map((player) => `${player.player_name} - ${player.jersey_number}`),
  };

  const league = {
    name: match.league?.name,
    logo: match.league?.image_path,
  };

  return (
    <div className="h-90vh w-full flex md:justify-center ">
      <div className="h-[80vh] w-[80vw] bg-pf-white mt-5 rounded-xl">
        <div className="h-[50%]  w-full flex md:flex-col md:justify-center items-center">
          <div className="w-full h-[15%] flex bg-pf-blue -mt-5">
            <div className="border-b w-full h-full pl-4 flex md:justify-center items-center">
              <h4 className="text-xl text-pf-white">{league.name}</h4>
              <img src={league.logo} alt="" className="max-h-[75%]" />
            </div>
          </div>

          {/* container de equipo y marcador */}
          <div className="w-[90%] h-[75%] flex  md:flex-row ">
            {/* nombre del local */}
            <div className=" w-[40%] flex md:flex-col md:justify-start items-center">
              <div className="h-[85%] w-full flex md:justify-center items-center">
                <img src={home.logo} alt="" className="max-h-[98%]" />
              </div>
              <div className="h-[15%] w-full  flex md:justify-center items-center">
                <h1 className="text-2xl uppercase text-black font-bold text-bebas-font">
                  {home.name}
                </h1>
              </div>
            </div>

            {/* marcadores */}
            <div className=" w-[20%] flex md:flex-col  md:justify-center items-center">
              <div className="w-full h-[70%] flex gap-5 md:justify-center md:items-center">
                <h1 className="font-bold text-black text-8xl">{home.score}</h1>
                <p className="text-8xl text-black">-</p>
                <h1 className="font-bold text-black text-8xl">{away.score}</h1>
              </div>
              <div className="w-full h-[30%] font-bold flex md:justify-center md:items-start ">
                <p className="pl-3">
                  {match.state === "ET" ? (
                    <p className="text-[30px] font-bold text-black">ET</p>
                  ) : match.state === "Finalizó" ? (
                    <p className="text-[30px] font-bold text-black">Finalizó</p>
                  ) : match.state === "Pronto" ? (
                    <p className="text-[30px] font-bold text-black">Pronto</p>
                  ) : (
                    <p className="text-[30px] font-bold text-black">
                      {match.periods?.[match.periods.length - 1]?.minutes || ""}
                      '
                    </p>
                  )}
                </p>
              </div>
            </div>

            <div className=" w-[40%] flex md:flex-col md:justify-end items-center">
              {/* nombre del visitante */}
              <div className="h-[85%] w-full flex md:justify-center items-center">
                <img src={away.logo} alt="" className="max-h-[98%]" />
              </div>
              <div className="h-[15%] w-full flex md:justify-center items-center">
                <h1 className="text-2xl uppercase text-black font-bold ">
                  {away.name}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex overflow-x-auto whitespace-nowrap h-[16%] ">
          <button
            className={`inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700 border border-b-0 border-gray-300 sm:text-base dark:border-gray-500 rounded-t-md dark:text-white whitespace-nowrap focus:outline-none ${
              activeTab === "resumen" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActiveTab("resumen")}
          >
            Resumen
          </button>
          <button
            className={`inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700 bg-transparent border-b border-gray-300 sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300 ${
              activeTab === "envivo" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActiveTab("envivo")}
          >
            En vivo
          </button>
          <button
            className={`inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700 bg-transparent border-b border-gray-300 sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300 ${
              activeTab === "alineaciones" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActiveTab("alineaciones")}
          >
            Alineaciones
          </button>
          <button
            className={`inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700 bg-transparent border-b border-gray-300 sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300 ${
              activeTab === "estadisticas" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActiveTab("estadisticas")}
          >
            Estadísticas
          </button>
        </div>
        {showAlineaciones && (
  <div className="bg-pf-white w-full flex flex-row justify-between">
    <div className="flex flex-col w-[50%]">
      <div className="flex flex-col">
        <h2 className="uppercase">Alineación del equipo local</h2>
        {home.lineup.map((player, index) => (
          <div className="h-[40px] w-full flex justify-start items-center">
            <div className="bg-pf-white w-full h-12 border-y border-gray-400 flex justify-start items-center pl-3">
              <p className="uppercase flex items-center font-medium text-gray-800" key={`home-player-${index}`}>
                {player}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <h2 className="uppercase">Suplentes</h2>
        {home.substitutes.map((player, index) => (
          <div className="h-[40px] w-full flex justify-start items-center">
            <div className="bg-pf-white w-full h-12 border-y border-gray-400 flex justify-start items-center pl-3">
              <p className="uppercase text-gray-800" key={`home-player-${index}`}>
                {player}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col w-[50%]">
      <div className="flex flex-col justify-end">
        <h2 className="uppercase">Alineación del equipo visitante</h2>
        {away.lineup.map((player, index) => (
          <div className="h-[40px] w-full flex justify-end items-center">
            <div className="bg-pf-white w-full h-12 border-y border-gray-400 flex justify-start items-center pl-3">
              <p className="uppercase" key={`away-player-${index}`}>
                {player}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <h2 className="uppercase">Suplentes</h2>
        {away.substitutes.map((player, index) => (
          <div className="h-[40px] w-full flex justify-start items-center">
            <div className="bg-pf-white w-full h-12 border-y border-gray-400 flex justify-start items-center pl-3">
              <p className="uppercase" key={`home-player-${index}`}>
                {player}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default DetailLivescore;
