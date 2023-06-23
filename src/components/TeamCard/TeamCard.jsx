import style from './TeamCard.module.css'

const TeamCard = ({name,logo}) => {
  return <div className={style.cardContainer}><img src={logo} alt={name} className={style.img} /></div>;
};

export default TeamCard;
