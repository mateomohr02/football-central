import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDetailTeam } from "../../redux/actions/getDetailTeam";
import { getVenueById } from "../../redux/actions/getVenueById";
import { getTeamSquadByTeamId } from "../../redux/actions/getTeamSquadByTeamId";
import { calculateAge } from "./utils";
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';


const DetailTeam = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const team = useSelector((state) => state.team.detailTeam);
  const playersId = team.players;
  console.log(playersId);
  const teamSquad = useSelector((state) => state.team.teamSquad);
  const venue = useSelector((state) => state.venue.venue);

  const [orderBy, setOrderBy] = useState({
    field: "lastname",
    direction: "asc",
  });

  useEffect(() => {
    dispatch(getDetailTeam(id));
  }, [dispatch, id]);
  
  useEffect(() => {
    if (playersId) {
      dispatch(getTeamSquadByTeamId(playersId));
    }
  }, [dispatch, playersId]);
  
  useEffect(() => {
    if (team && team.venue_id) {
      dispatch(getVenueById(team.venue_id)).catch((error) => {
        console.error("Error al obtener el estadio:", error);
      });
    }
  }, [dispatch, team, team.venue_id]);

  const handleOrderBy = (field) => {
    setOrderBy((prevOrderBy) => {
      if (prevOrderBy.field === field) {
        return {
          ...prevOrderBy,
          direction: prevOrderBy.direction === "asc" ? "desc" : "asc",
        };
      } else {
        return {
          field,
          direction: "asc",
        };
      }
    });
  };

  const sortTeamSquad = (squad) => {
    return squad.sort((a, b) => {
      if (orderBy.field === "lastname") {
        if (orderBy.direction === "asc") {
          console.log(squad, 'SQUAD');
          return a[0].lastname.localeCompare(b[0].lastname);
        } else {
          console.log(squad, 'SQUAD')
          return b[0].lastname.localeCompare(a[0].lastname);
        }
      } else if (orderBy.field === "age") {
        const ageA = calculateAge(a[0].date_of_birth);
        const ageB = calculateAge(b[0].date_of_birth);
        if (orderBy.direction === "asc") {
          return ageA - ageB;
        } else {
          return ageB - ageA;
        }
      }
      return 0;
    });
  };

  const sortedTeamSquad = sortTeamSquad(teamSquad);

  return (
    <div className="w-[90vw] h-[90vh] bg-gray-100 mx-auto rounded ">
      <div className="w-full h-[40%] bg-gray-200 flex items-center ">
        <div className="bg-gray-300 w-[30%] h-full flex justify-center items-center">
          <img src={team.image_path} alt={team.name} className="h-[85%]" />
        </div>
        <div className="flex flex-col justify-center items-start gap-5 pl-5">
          <h3 className="text-6xl ">{team.name}</h3>
          <div className="gap-2">
            <p className="text-lg">Año de fundación: {team.founded}</p>
            <p className="text-lg">Estadio: {venue.name}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-pf-blue w-full h-14 flex justify-start pl-4 items-center">
          <div className="w-[25%]">
            <h4 className="font-bold text-2xl text-white">PLANTILLA 2023</h4>
          </div>
          <div className="w-[75%] flex justify-end items-center pr-7">
            <div className="mr-4 flex items-center gap-1">
              <span className="text-white mr-2">Ordenar</span>
              <select
                value={orderBy.field}
                onChange={(e) => handleOrderBy(e.target.value)}
                className="p-2 bg-white border rounded h-10"
              >
                <option value="lastname">Apellido</option>
                <option value="age">Edad</option>
              </select>
              <button
                onClick={() => handleOrderBy(orderBy.field)}
                className="p-2 bg-white border rounded h-10"
              >
                {orderBy.direction === "asc" ? <KeyboardArrowUpRoundedIcon/> : <KeyboardArrowDownRoundedIcon/>}
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-10 bg-gray-100 w-full justify-center items-center">
          <div className="w-[25%] h-full flex justify-center items-center border-r">
            <p>Foto</p>
          </div>
          <div className="w-[25%] h-full flex justify-center items-center border-r">
            <p>Apellido y Nombre</p>
          </div>
          <div className="w-[25%] h-full flex justify-center items-center border-r">
            <p>Fecha de nacimiento</p>
          </div>
          <div className="w-[25%] h-full flex justify-center items-center border-r">
            <p>Altura</p>
          </div>
        </div>
        {sortedTeamSquad.map((player) => {
          console.log(player, 'JUGADOR');
          return (
            <div className="flex bg-gray-100">
              <div className="w-[25%] h-14 flex justify-center items-center py-1 border-r">
                <img src={player?.[0].image_path} alt="" className="max-h-10" />
              </div>
              <div className="w-[25%] h-14 flex justify-center items-center py-1 border-r">
                <p>{`${player?.[0].lastname}, ${player?.[0].firstname}`}</p>
              </div>
              <div className="w-[25%] h-14 flex justify-center items-center py-1 border-r">
              <p>{player?.[0]?.date_of_birth?.split("T")[0] || ""}</p>

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
