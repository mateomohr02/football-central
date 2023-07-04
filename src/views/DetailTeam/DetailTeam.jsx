import { useParams } from "react-router-dom";
import style from "./DetailTeam.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetailTeam } from "../../redux/actions/getDetailTeam";
import { getVenueById } from "../../redux/actions/getVenueById";
import { getTeamSquadByTeamId } from "../../redux/actions/getTeamSquadByTeamId";

const DetailTeam = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const team = useSelector((state) => state.team.detailTeam);
  const playersId = team.players;
  const teamSquad = useSelector((state) => state.team.teamSquad);
  const venue = useSelector((state) => state.venue.venue);
  console.log("players ids ", playersId);

  useEffect(() => {
    dispatch(getDetailTeam(id));
    dispatch(getTeamSquadByTeamId(playersId));
    if (team && team.venue_id) {
      dispatch(getVenueById(team.venue_id)).catch((error) => {
        console.error("Error al obtener el estadio:", error);
      });
    }
  }, [dispatch, id]);

  console.log("team squad 32 desde componente", teamSquad);
  /*  
   const background = venue ? `url(${venue.image_path})` : ""; */

  return (
    <div className="w-[90vw] h-[90vh] bg-gray-100 mx-auto rounded ">
      <div className="w-full h-[40%] bg-gray-200 flex items-center ">
        <div className="bg-gray-300 w-[30%] h-full flex justify-center items-center">
          <img src={team.image_path} alt={team.name} className="h-[85%]" />
        </div>
        <div className="flex flex-col justify-center  items-start gap-5 pl-5">
          <h3 className="text-6xl ">{team.name}</h3>
          <div className="gap-2">
            <p className="text-lg">Año de fundación: {team.founded}</p>
            <p className="text-lg">Estadio: {venue.name}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-pf-blue w-full h-14 flex justify-start pl-4 items-center">
          <h4 className="font-bold text-2xl text-white">PLANTILLA 2023</h4>
        </div>
        <div className="flex h-10 bg-gray-100 w-full justify-center items-center">
          <div className=" w-[25%] h-full flex justify-center items-center border-r">
            <p>Foto</p>
          </div>
          <div className=" w-[25%] h-full flex justify-center items-center border-r">
            <p>Apellido y Nombre</p>
          </div>
          <div className=" w-[25%] h-full flex justify-center items-center border-r">
            <p>Fecha de nacimiento</p>
          </div>
          <div className=" w-[25%] h-full flex justify-center items-center border-r">
            <p>Altura</p>
          </div>
        </div>
        {teamSquad.map((player) => {
          return (
            <div className="flex bg-gray-100">
              <div className="w-[25%] h-14 flex justify-center items-center py-1 border-r">
                <img src={player?.[0].image_path} alt="" className="max-h-10" />
              </div>
              <div className="w-[25%] h-14 flex justify-center items-center py-1 border-r">
                <p>{`${player?.[0].lastname}, ${player?.[0].firstname}`}</p>
              </div>

              <div className="w-[25%] h-14 flex justify-center items-center py-1 border-r">
                <p>{player?.[0].date_of_birth}</p>
              </div>
              <div className="w-[25%] h-14 flex justify-center items-center py-1 border-r">
                <p>{player?.[0].height}cm</p>
              </div>
            </div>
          );
        })}
      </div>

      <div></div>
    </div>
  );
};

export default DetailTeam;
