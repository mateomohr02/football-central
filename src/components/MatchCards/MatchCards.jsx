import { useSelector } from "react-redux";
import MatchCard from "../MatchCard/MatchCard";
import style from "./MatchCards.module.css";

const MatchCards = () => {
  const fixtureToday = useSelector((state) => state.fixtureToday);

  return (
    <div className={style.container}>
      <div className={style.subtitleContainer}>
        <h3 className={style.subtitle}>HOY</h3>
      </div>
      <div className={style.fixtureContainer}>
        {fixtureToday.map((match) => {
          return <MatchCard key={match.id} name={match.name} />;
        })}
      </div>
    </div>
  );
};

export default MatchCards;
