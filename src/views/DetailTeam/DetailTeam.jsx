import { useParams } from "react-router-dom";
import style from "./DetailTeam.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetailTeam } from "../../redux/actions/getDetailTeam";
import { getVenueById } from "../../redux/actions/getVenueById";
import { getPlayerById } from "../../redux/actions/getPlayerById";

const DetailTeam = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team.detailTeam);
  const venue = useSelector((state) => state.venue.venue);

  useEffect(() => {
    dispatch(getDetailTeam(id));
    dispatch(getPlayerById(id))
    if (team && team.venue_id) {
      dispatch(getVenueById(team.venue_id)).catch((error) => {
        console.error("Error al obtener el estadio:", error);
      });
    }
  }, [dispatch, id, team, team.venue_id]);
/* 
  const background = venue ? `url(${venue.image_path})` : ""; */

  return (
    <div className={style.mainContainer}>
      <div className={style.frontPage} /* style={{ backgroundImage: background }} */>
        <div className={style.imgContainer}>
          <img
            src={team.image_path}
            alt={team.name}
            className={style.teamImg}
          />
        </div>
        <div className={style.dataContainer}>
          <h3>{team.name}</h3>
          <p>Año de fundación: {team.founded}</p>
          <p>Estadio: {venue.name}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailTeam;
