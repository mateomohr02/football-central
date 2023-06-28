import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetailLivescores } from "../../redux/actions/getDetailLivescores";
import { resetLivescores } from "../../redux/actions/resetLivescores";

const DetailLivescore = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const livescores = useSelector((state) => state.livescores.detailLivescores);
  const match = livescores.find((obj) => obj.id === parseInt(id));
  console.log("livescore desde detail1", livescores, "el id del partido", id);
  console.log(
    "match desde el componente detail",
    match,
    "el id del partido",
    id
  );

  useEffect(() => {
    setInterval(() => {
      dispatch(getDetailLivescores());
    }, 15000);
    return () => {
      dispatch(resetLivescores());
    };
  }, [dispatch]);

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
  };

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
  };

  return (
    <div className="h-90vh w-full bg-blue-500 flex md:justify-center">
      <div className="h-[80vh] w-[80vw] bg-yellow-500 mt-5 ">
        <div className=" h-[44%] bg-green-500 w-full flex md:justify-center items-center">
          {/* container de equipo y marcador */}
          <div className="bg-red-500 w-[90%] h-40 flex  md:flex-row">
            <div className="bg-orange-500 w-[40%] flex md:flex-col md:justify-start items-center">
              {" "}
              {/* nombre del local */}
              <img src={home.logo} alt="" className="max-h-32" />
              <h1 className="text-2xl">{home.name}</h1>
            </div>

            <div className="bg-slate-500 w-[20%] flex gap-5">
              {/* marcadores */}
              <h1>{home.score}</h1>
              <h1>{away.score}</h1>
            </div>

            <div className="bg-orange-500 w-[40%] flex md:flex-col md:justify-end items-center">
              {/* nombre del visitante */}
              <img src={away.logo} alt="" className="max-h-32" />
              <h1 className="text-2xl">{away.name}</h1>
            </div>
          </div>
        </div>

        <div className="flex overflow-x-auto whitespace-nowrap h-[16%] bg-orange-500">
          <button className="inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700 border border-b-0 border-gray-300 sm:text-base dark:border-gray-500 rounded-t-md dark:text-white whitespace-nowrap focus:outline-none">
            Resumen
          </button>
          <button className="inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700 bg-transparent border-b border-gray-300 sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300">
            En vivo
          </button>
          <button className="inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700 bg-transparent border-b border-gray-300 sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300">
            Alineaciones
          </button>
          <button className="inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700 bg-transparent border-b border-gray-300 sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300">
            Estadísticas
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailLivescore;
