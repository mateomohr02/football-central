import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import MatchCard from '../MatchCard/MatchCard'
import style from './DetailCups.module.css'

const DetailCups = () => {
  const fixtureByDateRange = useSelector((state) => state.fixtureByDateRange);
  let timeZone = 3;

  const [showAllMatches, setShowAllMatches] = useState(false);

  const fixture = fixtureByDateRange.map((match) => {
    const matchDate = moment(match.starting_at)
      .subtract(timeZone, "hours")
      .format("YYYY-MM-DD");
    const matchHour = moment(match.starting_at)
      .subtract(timeZone, "hours")
      .format("HH:mm:ss");
    return { ...match, starting_at: `${matchDate} ${matchHour}` };
  });

  const today = moment().format("YYYY-MM-DD");
  const tomorrow = moment().add(1, "day").format("YYYY-MM-DD");
  const dayAfterTomorrow = moment().add(2, "days").format("YYYY-MM-DD");

  const todayMatches = fixture.filter((match) => {
    const matchDate = match.starting_at.split(" ")[0];
    return matchDate === today;
  });

  const tomorrowMatches = fixture.filter((match) => {
    const matchDate = match.starting_at.split(" ")[0];
    return matchDate === tomorrow;
  });

  const dayAfterTomorrowMatches = fixture.filter((match) => {
    const matchDate = match.starting_at.split(" ")[0];
    return matchDate === dayAfterTomorrow;
  });

  const toggleShowAllMatches = () => {
    setShowAllMatches((prevShowAllMatches) => !prevShowAllMatches);
  };

  const renderMatches = (matches) => {
    if (showAllMatches) {
      return matches.map((match) => (
        <MatchCard key={match.id} name={match.name} />
      ));
    } else {
      return matches.slice(0, 4).map((match) => (
        <MatchCard key={match.id} name={match.name} />
      ));
    }
  };

  return (
    <div className={style.container}>
       <div className={style.subtitleContainer}>
        <h3 className={style.subtitle}>MARTES</h3>
      </div>
      <div className={style.fixtureContainer}>
        {renderMatches(todayMatches)}
      
      </div>

      <div className={style.subtitleContainer}>
        <h3 className={style.subtitle}>MIERCOLES</h3>
      </div>
      <div className={style.fixtureContainer}>
        {renderMatches(tomorrowMatches)}
       
      </div>

      <div className={style.subtitleContainer}>
        <h3 className={style.subtitle}>JUEVES</h3>
      </div>
      <div className={style.fixtureContainer}>
        {renderMatches(dayAfterTomorrowMatches)}
        {dayAfterTomorrowMatches.length > 4 && (
          <div className={style.buttonContainer}>
          <button className={style.expandButton} onClick={toggleShowAllMatches}>
            {showAllMatches ? "Mostrar menos" : "Mostrar todos"}
          </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default DetailCups