import style from './TeamCard.module.css'

const TeamCard = ({name,logo}) => {
  return <div className={style.container}><img src={logo} alt={name} /></div>;
};

export default TeamCard;
