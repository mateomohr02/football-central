import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import MatchCard from "../MatchCard/MatchCard";
import style from "./MatchCards.module.css";

const MatchCards = () => {
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
    return matchDate === today /* && match.league_id === 636 */;
  });

  console.log("de hoy", todayMatches);

  const tomorrowMatches = fixture.filter((match) => {
    const matchDate = match.starting_at.split(" ")[0];
    return matchDate === tomorrow /* && match.league_id === 636 */;
  });

  const dayAfterTomorrowMatches = fixture.filter((match) => {
    const matchDate = match.starting_at.split(" ")[0];
    return matchDate === dayAfterTomorrow /* && match.league_id === 636 */;
  });

  const toggleShowAllMatches = () => {
    setShowAllMatches((prevShowAllMatches) => !prevShowAllMatches);
  };

  const renderMatches = (matches) => {
    if (showAllMatches) {
      return matches.map((match) => (
        <MatchCard
          key={match.id}
          local={match.name.split("vs")[0].trim()}
          visitor={match.name.split("vs")[1].trim()}
        />
      ));
    } else {
      return matches
        .slice(0, 4)
        .map((match) => (
          <MatchCard
            key={match.id}
            local={match.name.split("vs")[0].trim()}
            visitor={match.name.split("vs")[1].trim()}
          />
        ));
    }
  };

  return (
    <div className="md:absolute md:top-[600px] md:w-[60%] md:ml-16 bg-pf-dark-grey  md:gap-4 md:flex md:flex-col md:justify-center pl-[10px] pt-3">
      <div className=" md:flex md:justify-start md:items-center md:w-176 text-lg md:ml-1  bg-transparent md:border-2 md:border-t-0 md:border-x-0 border-b-pf-white">
        <h3 className="text-pf-white md:text-l md:font-extralight md:pl-5 ">
          HOY
        </h3>
      </div>
      <div className="md:flex md:flex-row md:flex-wrap md:justify-start md:gap-2">
        {renderMatches(todayMatches)}
      </div>

      <div className=" md:flex md:justify-start md:items-center md:w-176 text-lg md:ml-1  bg-transparent md:border-2 md:border-t-0 md:border-x-0 border-b-pf-white">
        <h3 className="text-pf-white md:text-l md:font-extralight md:pl-5 ">
          MAÑANA
        </h3>
      </div>
      <div className="md:flex md:flex-row md:flex-wrap md:justify-start md:gap-2">
        {renderMatches(tomorrowMatches)}
      </div>

      <div className=" md:flex md:justify-start md:items-center md:w-176 text-lg md:ml-1  bg-transparent md:border-2 md:border-t-0 md:border-x-0 border-b-pf-white">
        <h3 className="text-pf-white md:text-l md:font-extralight md:pl-5 ">
          PASADO MAÑANA
        </h3>
      </div>
      <div className="md:flex md:flex-row md:flex-wrap md:gap-2">
        {renderMatches(dayAfterTomorrowMatches)}
        {dayAfterTomorrowMatches.length > 4 && (
          <div className={style.buttonContainer}>
            <button
              className="bg-pf-white md:w-40 md:h-5 md:flex md:justify-center md:items-center md:rounded-l  md:rounded-r"
              onClick={toggleShowAllMatches}
            >
              {showAllMatches ? "Mostrar menos" : "Mostrar todos"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchCards;
