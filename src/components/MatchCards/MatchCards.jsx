import { useSelector } from "react-redux";
import MatchCard from "../MatchCard/MatchCard";


const MatchCards = () => {
  const fixtureToday = useSelector(state=>state.fixtureToday)

  return <div>
    {
      fixtureToday.map(match =>{
        return(
          <MatchCard
          
            key={match.id}
            name= {match.name}
          />
        )
      })
    }
  </div>;
};

export default MatchCards;
