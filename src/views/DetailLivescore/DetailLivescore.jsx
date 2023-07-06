import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getLivescoresLatest } from "../../redux/actions/getLivescoresLatest";
import { resetLivescores } from "../../redux/actions/resetLivescores";
import unknownLineup from "../../assets/unknown lineup.svg";


const DetailLivescore = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("alineaciones");

  const showAlineaciones = activeTab === "alineaciones";
  const showEnvivo= activeTab === "envivo";
 


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
    match.participants?.[0]?.name ||
    match.name.split("vs")[0].trim() ||
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
    match.participants?.[1]?.name ||
    match.name.split("vs")[1].trim() ||
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
      <div className="h-[80vh] w-[80vw] bg-gray-100 mt-5 rounded-xl">
        <div className="h-[50%]  w-full flex md:flex-col md:justify-center items-center">
          <div className="w-full h-[15%] flex bg-pf-blue -mt-5">
            <div className="border-b w-full h-full pl-4 flex md:justify-center items-center">
              <h4 className="text-xl text-pf-white">{league.name}</h4>
              <img src={league.logo} alt="" className="max-h-[75%]" />
              <div></div>
            </div>
          </div>

          {/* container de equipo y marcador */}
          <div className="w-[90%] h-[75%] flex  md:flex-row ">
            {/* nombre del local */}
            <div className=" w-[40%] flex md:flex-col md:justify-start items-center">
              <div className="mt-2 h-[90%] w-full flex md:justify-center items-center ">
                <div className="bg-gray-300 rounded-full max-h-full p-3">
                  <img src={home.logo} alt="" className="max-h-[95%]" />
                </div>
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
                      {match.periods && match.periods.length > 0 ? (
                        <>
                          {match.periods[match.periods.length - 1].minutes ||
                            ""}
                          '
                        </>
                      ) : (
                        "Pronto"
                      )}
                    </p>
                  )}
                </p>
              </div>
            </div>

            <div className=" w-[40%] flex md:flex-col md:justify-end items-center">
              {/* nombre del visitante */}
              <div className="mt-2 h-[90%] w-full flex md:justify-center items-center ">
                <div className="bg-gray-300 rounded-full max-h-full p-3">
                  <img src={away.logo} alt="" className="max-h-[95%]"/>
                </div>
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
     

        {showAlineaciones && (
          <div className=" w-full flex flex-row justify-center bg-red-500">

            {/* contenedor */}
            <div className="flex flex-col w-[50%] justify-start pl-5">


              {/* contenedor local */}
              <div className="flex flex-col w-[90%] h-96">
                <div className="w-80 h-10 mx-auto bg-pf-blue rounded-lg flex justify-center items-center">
                  <h2 className="uppercase font-bold text-lg text-white">
                    LOCAL
                  </h2>
                </div>
                {home.lineup.length > 0 ? (
                  home.lineup.map((player, index) => (
                    <div className="h-[40px] w-full flex justify-start items-center">
                      <div className="w-full h-6 border-b flex justify-start items-center">
                        <p
                          className="flex items-center font-medium text-gray-800"
                          key={`home-player-${index}`}
                        >
                          {player}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <img src={unknownLineup} alt="Alineaciones no disponibles" />
                )}
              </div>


              <div className="w-[90%] h-96 flex flex-col mt-5 ">
                <div className="w-80 h-10 mx-auto bg-pf-blue rounded-lg flex justify-center items-center">
                  <h2 className="uppercase font-bold text-lg text-white">
                    Suplentes
                  </h2>
                </div>
                {home.substitutes.map((player, index) => (
                  <div className="h-[40px] w-full flex justify-start items-center">
                    <div className="w-full h-6 border-b flex justify-start items-center">
                      <p
                        className="flex items-center font-medium text-gray-800"
                        key={`home-player-${index}`}
                      >
                        {player}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div className="flex flex-col w-[50%] justify-start pl-5 bg-yellow-500">

              <div className="flex flex-col w-[90%] h-96">
                <div className="w-80 h-10 mx-auto bg-pf-blue rounded-lg flex justify-center items-center">
                  <h2 className="uppercase font-bold text-lg text-white">
                    VISITANTE
                  </h2>
                </div>
                {away.lineup.length > 0 ? (
                  away.lineup.map((player, index) => (
                    <div className="h-[40px] w-full flex justify-start items-center">
                      <div className="w-full h-12 border-b flex justify-start items-center">
                        <p
                          className="flex items-center font-medium text-gray-800"
                          key={`away-player-${index}`}
                        >
                          {player}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <img src={unknownLineup} alt="Alineaciones no disponibles" />
                )}
              </div>
              <div className="flex flex-col mt-5 w-full">
                <div className="w-[75%] h-10 bg-pf-blue rounded-lg mx-auto flex justify-center items-center">
                  <h2 className="uppercase font-bold text-lg text-white">
                    Suplentes
                  </h2>
                </div>
                {away.substitutes.map((player, index) => (
                  <div className="h-[40px] w-full flex justify-start items-center">
                    <div className="w-full h-12 border-b flex justify-start items-center">
                      <p
                        className="flex items-center font-medium text-gray-800"
                        key={`home-player-${index}`}
                      >
                        {player}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div>

</div>



      </div>
    </div>
  );
};

export default DetailLivescore;
