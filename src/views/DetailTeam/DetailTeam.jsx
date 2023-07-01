import { useParams } from "react-router-dom";
import style from "./DetailTeam.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetailTeam } from "../../redux/actions/getDetailTeam";
import { getVenueById } from "../../redux/actions/getVenueById";
import { getPlayerById } from "../../redux/actions/getPlayerById";
import { getTeamSquadByTeamId } from "../../redux/actions/getTeamSquadByTeamId";

const DetailTeam = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
 

  const team = useSelector((state) => state.team.detailTeam);
  const playersId = team.players
  const teamSquad = useSelector(state => state.team.teamSquad)
  const venue = useSelector((state) => state.venue.venue);
  console.log('players ids ', playersId)
 
  useEffect(() => {
    dispatch(getDetailTeam(id));
    dispatch(getTeamSquadByTeamId(playersId));
    if (team && team.venue_id) {
      dispatch(getVenueById(team.venue_id)).catch((error) => {
        console.error("Error al obtener el estadio:", error);
      });
    }
  }, [dispatch, id]);



  console.log('team squad 32 desde componente',teamSquad)
  /* 
  const background = venue ? `url(${venue.image_path})` : ""; */

  return (
    <div className="w-[90vw] h-[90vh] bg-red-500 mx-auto mt-5">
      <div className="w-full h-[40%] bg-yellow-500 flex items-center">
        <div className="bg-orange-500 w-[30%] h-full flex justify-center items-center">
          <img src={team.image_path} alt={team.name} className="h-[85%]" />
        </div>
        <div className={style.dataContainer}>
          <h3>{team.name}</h3>
          <p>Año de fundación: {team.founded}</p>
          <p>Estadio: {venue.name}</p>
        </div>
      </div>

      <div className="flex overflow-x-auto whitespace-nowrap">
        <button className="inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700 border border-b-0 border-gray-300 sm:text-base dark:border-gray-500 rounded-t-md dark:text-white whitespace-nowrap focus:outline-none">
          Plantilla
        </button>

        <button className="inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700 bg-transparent border-b border-gray-300 sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300">
          Palmarés
        </button>
      </div>

      <div></div>
    </div>
  );
};

export default DetailTeam;
