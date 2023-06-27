import TeamCard from "../TeamCard/TeamCard";
import style from './TeamCards.module.css'
import { useSelector } from "react-redux";
/* const teams = [
  {
    id: 1,
    name: "River Plate",
    logo: "https://www.ligaprofesional.ar/wp-content/uploads/2022/03/RIV-escudo.png",
  },
  {
    id: 2,
    name:'Talleres',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2021/08/TAL-escudo.png'
  },
  {
    id: 3,
    name:'San Lorenzo',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/SLO-escudo.png'
  },
  {
    id: 4,
    name:'Estudiantes de La Plata',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2023/03/Estudiantes_OK.png'
  },
  {
    id: 5,
    name:'Lanús',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/LAN-escudo.png'
  },
  {
    id: 6,
    name:'Rosario Central',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/RC-escudo.png'
  },
  {
    id: 7,
    name:'Defensa Y Justicia',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2021/04/DYJ-escudo.png'
  },
  {
    id: 8,
    name:'Belgrano',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2022/12/belgrano.png'
  },
  {
    id: 9,
    name:'Argentinos Jrs.',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/ARG-escudo.png'
  },
  {
    id: 10,
    name:'Godoy Cruz',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/GOD-escudo.png'
  },
  {
    id: 11,
    name:'Boca Jrs.',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/BOC-escudo.png'
  },
  {
    id: 12,
    name:'Newells Old Boys',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/NOB-escudo.png'
  },
  {
    id: 13,
    name:'Platense',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2021/02/PLA-escudo.png'
  },
  {
    id: 14,
    name:'Racing Club',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/RAC-escudo.png'
  },
  {
    id: 15,
    name:'Sarmiento de Junín',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2023/03/Sarmiento_OK.png'
  },
  {
    id: 16,
    name:'Gimnasia La Plata',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/GIM-escudo.png'
  },
  {
    id: 17,
    name:'Central Córdoba',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/CCO-escudo.png'
  },
  {
    id: 18,
    name:'Colón de Santa Fé',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2021/06/COL-escudo.png'
  },
  {
    id: 19,
    name:'Barracas Central',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2022/01/BAR-escudo.png'
  },
  {
    id: 20,
    name:'Tigre',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2022/01/TIG-escudo.png'
  },
  {
    id: 21,
    name:'Instituto',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2022/12/instituto.png'
  },
  {
    id: 22,
    name:'Independiente',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/IND-escudo.png'
  },
  {
    id: 23,
    name:'Atlético Tucumán',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/ATU-escudo.png'
  },
  {
    id: 24,
    name:'Unión de Santa Fé',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/UNI-escudo.png'
  },
  {
    id: 25,
    name:'Vélez Sarsfield',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/VEL-escudo.png'
  },
  {
    id: 26,
    name:'Huracán',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2023/03/Huracan_OK.png'
  },
  {
    id: 27,
    name:'Banfield',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/BAN-escudo.png'
  },
  {
    id: 28,
    name:'Arsenal de Sarandí',
    logo:'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/ARS-escudo.png'
  }
]; */




const TeamCards = () => {
  const teams = useSelector((state) => state.leagueCup.countryLeagues);

  return <div className={style.cardsContainer}>
    {
      teams.map(team =>{
        return <TeamCard
        key={team.id}
        name={team.name}
        logo={team.logo}
        />
      })
    }
  </div>;
};

export default TeamCards;
