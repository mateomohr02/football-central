import style from './MatchCard.module.css'

const MatchCard = ({name}) => {
  return <div className={style.cardContainer}>
    <p>{name}</p>
  </div>;
};

export default MatchCard;
