import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStandingsLeague } from "../../redux/actions/getStandingsLeague";
import { getDetailLeague } from "../../redux/actions/getDetailLeague";
import { resetDetailLeague } from "../../redux/actions/resetDetailLeague";
import { resetStandingsLeague } from "../../redux/actions/resetStandingsLeague";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SquareIcon from '@mui/icons-material/Square';
const scorers = [
  {
    position: 1,
    player: "Michael Santos",
    team: "Talleres de Córdoba",
    goals: 13,
  },
  {
    position: 2,
    player: "Pablo Vegetti",
    team: "Belgrano",
    goals: 13,
  },
  {
    position: 3,
    player: "Leandro Díaz",
    team: "Lanús",
    goals: 11,
  },
  {
    position: 4,
    player: "Gabriel Ávalos",
    team: "Argentinos Juniors",
    goals: 11,
  },
  {
    position: 5,
    player: "Martín Cauteruccio",
    team: "Independiente",
    goals: 11,
  },
  {
    position: 6,
    player: "Mateo Retegui",
    team: "Tigre",
    goals: 10,
  },
  {
    position: 7,
    player: "Nicolás Fernández",
    team: "Defensa y Justicia",
    goals: 10,
  },
  {
    position: 8,
    player: "Lucas Beltrán",
    team: "River Plate",
    goals: 9,
  },
  {
    position: 9,
    player: "Alejo Veliz",
    team: "Rosario Central",
    goals: 8,
  },
  {
    position: 10,
    player: "Adrián Martínez",
    team: "Instituto",
    goals: 8,
  },
];

const yellowCards = [
  {
    position: 1,
    team: "Rosario Central",
    player: "Kevin Ortíz",
    yellowCards: 9,
  },
  {
    position: 2,
    team: "Gimnasia La Plata",
    player: "Ignacio Miramon",
    yellowCards: 8,
  },
  {
    position: 3,
    team: "Unión Santa Fe",
    player: "Yeison Gordillo",
    yellowCards: 8,
  },
  {
    position: 4,
    team: "Independiente",
    player: "Ayrton Costa",
    yellowCards: 8,
  },
  {
    position: 5,
    team: "Unión Santa Fe",
    player: "Federico Vera",
    yellowCards: 8,
  },
  {
    position: 6,
    team: "Newell's Old Boys",
    player: "Juan Sforza",
    yellowCards: 8,
  },
  {
    position: 7,
    team: "Defensa y Justicia",
    player: "Tomás Cardona",
    yellowCards: 8,
  },
  {
    position: 8,
    team: "Instituto",
    player: "Adrián Martínez",
    yellowCards: 8,
  },
  {
    position: 9,
    team: "Sarmiento",
    player: "Emiliano Méndez",
    yellowCards: 8,
  },
  {
    position: 10,
    team: "Rosario Central",
    player: "Facundo Mallo",
    yellowCards: 8,
  },
];

const redCards = [
  {
    position: 1,
    team: "Belgrano",
    player: "Alejandro Rébola",
    redCards: 3
  },
  {
    position: 2,
    team: "Newell's Old Boys",
    player: "Ángelo Martino",
    redCards: 2
  },
  {
    position: 2,
    team: "Huracán",
    player: "Patricio Pizarro",
    redCards: 2
  },
  {
    position: 2,
    team: "Barracas Central",
    player: "Nicolás Capraro",
    redCards: 2
  },
  {
    position: 2,
    team: "Boca Juniors",
    player: "Ignacio Fernández",
    redCards: 2
  },
  {
    position: 2,
    team: "Newell's Old Boys",
    player: "Willer Ditta",
    redCards: 2
  },
  {
    position: 2,
    team: "Banfield",
    player: "Alejandro Cabrera",
    redCards: 2
  },
  {
    position: 2,
    team: "Lanús",
    player: "Cristian Lema",
    redCards: 2
  },
  {
    position: 2,
    team: "Defensa y Justicia",
    player: "Kevin Gutiérrez",
    redCards: 2
  },
  {
    position: 2,
    team: "Lanús",
    player: "Luciano Boggio",
    redCards: 2
  }
];


const ArgSuperliga = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const standings = useSelector((state) => state.standings.standings);
  const detailLeague = useSelector((state) => state.leagueCup.detailLeague);
  const argLeague = detailLeague?.[0];
  console.log("el detail", argLeague);

  useEffect(() => {
    dispatch(getDetailLeague(id));
    dispatch(getStandingsLeague(id));
    return () => {
      dispatch(resetDetailLeague());
      dispatch(resetStandingsLeague());
    };
  }, [dispatch, id]);

  return (
    <div className="w-[90vw] bg-red-500 mx-auto mt-5 rounded-xl">
      <div className="w-full h-[45%] bg-blue-500 mx-auto mt-5">
        <div className=" bg-white flex flex-row justify-start items-center gap-5 h-full w-[80%] rounded-xl  p-5">
          <div className="bg-orange-500 w-[30%] h-full flex justify-center items-center">
            <img src={argLeague?.image_path} alt="" className="max-h-[90%]" />
          </div>
          <h1 className="text-[80px]">{argLeague?.name}</h1>
        </div>
      </div>
      <div className="flex flex-col">


        <div className="flex flex-row h-[500px] w-full bg-yellow-400"> {/* contenedor posiciones y goleadores */}

          <div className="w-[50%] ml-auto overflow-y-scroll ">
        <div className="bg-pf-blue w-[90%] h-10 mx-auto flex justify-start items-center pl-6">
          <h4 className="font-bold text-lg  text-white">POSICIONES </h4>
        </div>
          <div>
            <table className="w-full ">
              <thead className="bg-white border-b rounded-xl ">
                <tr className="flex flex-row ">
                  <div className="w-[75%] text-sm flex justify-start items-center pl-10 font-medium text-gray-900 px-6 py-1 text-left">
                    <p>Equipo</p>
                  </div>
                  <div className="w-[25%] text-sm flex justify-center items-center font-medium text-gray-900 px-6 py-1 text-left">
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
                      <div className=" w-[75%] flex justify-start items-center pl-3 gap-3">
                        <td className="py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                          <img
                            className="max-h-6"
                            src={p?.teamInfo?.image_path}
                            alt={`Escudo ${p?.teamInfo?.name}`}
                          />
                        </td>
                        <td className=" py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                          {p?.teamInfo?.name}
                        </td>
                      </div>
                      <div className="w-[25%] flex justify-center items-center">
                        <td className="py-1 whitespace-nowrap text-sm font-medium text-gray-900">
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

          <div className="bg-gray-100 border-b w-[50%]">
          <div className="bg-pf-blue w-[90%] h-10 mx-auto flex justify-start items-center pl-6 gap-4">
            <h4 className="font-bold text-lg  text-white">GOLEADORES</h4>
            <SportsSoccerIcon className="text-white"/>
          </div>
          <div className="flex border-b">
            <div className="w-[25%] flex justify-center items-center">
              <p>Puesto</p>
            </div>
            <div className="w-[25%] flex justify-center items-center">
              <p>Jugador</p>
            </div>
            <div className="w-[25%] flex justify-center items-center">
              <p>Equipo</p>
            </div>
            <div className="w-[25%] flex justify-center items-center">
              <p>Goles</p>
            </div>
          </div>
          {scorers.map((scorer) => {
            return (
              <div className="flex flex-row">
                <div className="w-[25%] flex justify-center items-center border-b">
                  <p className="py-2  whitespace-nowrap text-sm font-medium text-gray-900">
                    {scorer.position}
                  </p>
                </div>
                <div className="w-[25%] flex justify-center items-center border-b">
                  <p className="py-2  whitespace-nowrap text-sm font-medium text-gray-900">
                    {scorer.player}
                  </p>
                </div>
                <div className="w-[25%] flex justify-center items-center border-b">
                  <p className="py-2  whitespace-nowrap text-sm font-medium text-gray-900">
                    {scorer.team}
                  </p>
                </div>
                <div className="w-[25%] flex justify-center items-center border-b">
                  <p className="py-2  whitespace-nowrap text-sm font-medium text-gray-900">
                    {scorer.goals}
                  </p>
                </div>
              </div>
            );
          })}
          </div>

        </div>



        <div className="flex flex-row"> {/* contenedor rojas y amarillas */}

          <div className="w-[50%]"> {/* amarillas */}
        <div className="bg-pf-blue w-[90%] h-10 mx-auto flex justify-start items-center pl-6 gap-4">
            <h4 className="font-bold text-lg  text-white">TARJETAS AMARILLAS</h4>
            <SquareIcon className="text-yellow-500"/>
          </div>
          <div className="bg-gray-100 flex border-b">
            <div className="w-[25%] flex justify-center items-center">
              <p>Puesto</p>
            </div>
            <div className="w-[25%] flex justify-center items-center">
              <p>Jugador</p>
            </div>
            <div className="w-[25%] flex justify-center items-center">
              <p>Equipo</p>
            </div>
            <div className="w-[25%] flex justify-center items-center">
              <p>Tarjetas</p>
            </div>
          </div>

          {
            yellowCards.map(player => {
              return <div className="bg-gray-100 flex flex-row">
              <div className="w-[25%] flex justify-center items-center border-b">
                <p className="py-2  whitespace-nowrap text-sm font-medium text-gray-900">
                  {player.position}
                </p>
              </div>
              <div className="w-[25%] flex justify-center items-center border-b">
                <p className="py-2  whitespace-nowrap text-sm font-medium text-gray-900">
                  {player.player}
                </p>
              </div>
              <div className="w-[25%] flex justify-center items-center border-b">
                <p className="py-2  whitespace-nowrap text-sm font-medium text-gray-900">
                  {player.team}
                </p>
              </div>
              <div className="w-[25%] flex justify-center items-center border-b">
                <p className="py-2  whitespace-nowrap text-sm font-medium text-gray-900">
                  {player.yellowCards}
                </p>
              </div>
            </div>
            })
          }
          </div>

          <div className="w-[50%]">{/* rojas */}
        <div className="bg-pf-blue w-[90%] h-10 mx-auto flex justify-start items-center pl-6">
            <h4 className="font-bold text-lg  text-white">TARJETAS ROJAS</h4>
            <SquareIcon className="text-red-500"/>
          </div>
          <div className="flex border-b bg-gray-100">
            <div className="w-[25%] flex justify-center items-center">
              <p>Puesto</p>
            </div>
            <div className="w-[25%] flex justify-center items-center">
              <p>Jugador</p>
            </div>
            <div className="w-[25%] flex justify-center items-center">
              <p>Equipo</p>
            </div>
            <div className="w-[25%] flex justify-center items-center">
              <p>Tarjetas</p>
            </div>
          </div>

          {
            redCards.map(player => {
              return <div className="flex flex-row bg-gray-100">
              <div className="w-[25%] flex justify-center items-center border-b">
                <p className="py-2  whitespace-nowrap text-sm font-medium text-gray-900">
                  {player.position}
                </p>
              </div>
              <div className="w-[25%] flex justify-center items-center border-b">
                <p className="py-2  whitespace-nowrap text-sm font-medium text-gray-900">
                  {player.player}
                </p>
              </div>
              <div className="w-[25%] flex justify-center items-center border-b">
                <p className="py-2  whitespace-nowrap text-sm font-medium text-gray-900">
                  {player.team}
                </p>
              </div>
              <div className="w-[25%] flex justify-center items-center border-b">
                <p className="py-2  whitespace-nowrap text-sm font-medium text-gray-900">
                  {player.redCards}
                </p>
              </div>
            </div>
            })
          }

          </div>

        </div>


      </div>
    </div>
  );
};

export default ArgSuperliga;
