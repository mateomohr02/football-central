import { Link } from "react-router-dom";
import style from "./TeamCard.module.css";

const TeamCard = ({id, name, logo }) => {
  return (
    <div className={style.cardContainer}>
      <Link to={`/team/${id}`}>
        <img src={logo} alt={name} className={style.img} />
      </Link>
    </div>
  );
};

export default TeamCard;
