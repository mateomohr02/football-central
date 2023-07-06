import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import FixtureCard from "../../components/FixtureCard/FixtureCard";
import LivescoreCard from "../../components/LivescoreCard/LivescoreCard";
import { formatMatch } from "../../components/MatchCards/formatMatch";
import { getFixtureByDateRange } from "../../redux/actions/getFixtureByDateRange";
import { getLivescoresLatest } from "../../redux/actions/getLivescoresLatest";

const DetailFixtures = () => {
  const livescores = useSelector((state) => state.livescores.livescores);
  const fixtureByDateRange = useSelector(
    (state) => state.fixture.fixtureByDateRange
  );

  const dispatch = useDispatch();
  const [selectedLeague, setSelectedLeague] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredLiveMatches, setFilteredLiveMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          dispatch(getFixtureByDateRange(selectedLeague, selectedDate)),
        ]);
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchDataInterval = setInterval(fetchData, 3600000);

    const getLivescoresLatestInterval = setInterval(() => {
      dispatch(getLivescoresLatest());
    }, 15000);

    fetchData(); // Llamada inicial para obtener los datos inmediatamente

    return () => {
      clearInterval(fetchDataInterval);
      clearInterval(getLivescoresLatestInterval);
    };
  }, [dispatch, selectedLeague, selectedDate]);

  const fixture = formatMatch(fixtureByDateRange);
  const fixtureLive = formatMatch(livescores);

  const renderMatches = (matches) => {
    return matches.map((match) => (
      <FixtureCard
        key={match.id}
        home={match.participants?.[0]?.name || match.name.split("vs")[0].trim()}
        homeLogo={match.participants?.[0]?.image_path}
        away={match.participants?.[1]?.name || match.name.split("vs")[1].trim()}
        awayLogo={match.participants?.[1]?.image_path}
        homeScore={
          match.scores &&
          match.scores.find(
            (item) =>
              item.description === "CURRENT" &&
              item.score.participant === "home"
          )?.score?.goals
        }
        awayScore={
          match.scores &&
          match.scores.find(
            (item) =>
              item.description === "CURRENT" &&
              item.score.participant === "away"
          )?.score?.goals
        }
        hour={match.starting_at?.split(" ")[1]?.trim()}
        date={match.starting_at?.split(" ")[0]?.trim()}
      />
    ));
  };

  const today = moment().format("YY-MM-DD");
  const tomorrow = moment().add(1, "day").format("YY-MM-DD");
  const dayAfterTomorrow = moment().add(2, "days").format("YY-MM-DD");

  const handleLeagueChange = (event) => {
    setSelectedLeague(event.target.value);
    setSelectedDate(null);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const filteredMatches = fixture.filter((match) => {
    const matchDate = match.starting_at.split(" ")[0];
    const isLiveMatch = fixtureLive.some(
      (liveMatch) => liveMatch.league_id.toString() === selectedLeague
    );

    return (
      (!selectedLeague || match.league_id.toString() === selectedLeague) &&
      ((!selectedDate && !isLiveMatch) ||
        matchDate === selectedDate ||
        (selectedDate === "today" && matchDate === today) ||
        (selectedDate === "tomorrow" && matchDate === tomorrow) ||
        (selectedDate === "dayAfterTomorrow" && matchDate === dayAfterTomorrow))
    );
  });

  return (
    <div className="w-[85%] mx-auto">
      <div className="w-full">
        <div className="w-full h-56 bg-gray-100 rounded-b-xl border-white">
          <div className="h-[70%] flex justify-start items-center pl-5">
            <h1 className="font-bold text-6xl text-pf-blue ">
              Fixture General
            </h1>
          </div>

          <div className="w-full rounded-b-xl bg-pf-blue h-[30%] flex justify-end items-center pr-5 gap-7">
            <select
              value={selectedLeague}
              onChange={handleLeagueChange}
              className="p-2 bg-white border rounded h-10 cursor-pointer gap-2"
            >
              <option value="" selected>Todas las ligas</option>
              <option value="8">Premier League</option>
              <option value="384">Serie A</option>
              <option value="564">La Liga</option>
              <option value="301">League 1</option>
              <option value="82">Bundesliga</option>
              <option value="968">J League</option>
              <option value="1034">K League</option>
              <option value="636">Liga Profesional Argentina</option>
            </select>

            <select
              value={selectedDate}
              onChange={handleDateChange}
              className="p-2 bg-white border rounded cursor-pointer h-10 py-2"
            >
              <option value="">Todas las fechas</option>
              <option value="today">Hoy ({today})</option>
              <option value="tomorrow">Mañana ({tomorrow})</option>
              <option value="dayAfterTomorrow">
                Pasado mañana ({dayAfterTomorrow})
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="  flex flex-row justify-start items-center flex-wrap gap-4 ">
        <div className="  w-full p-5">
          {fixtureLive.length > 0 && (
            <div className="flex flex-col w-full">
              <div className="bg-pf-blue p-2 w-96 my-4 rounded-lg pl-7">
                <h2 className="font-bold text-xl text-white ">
                  PARTIDOS EN VIVO
                </h2>
              </div>
              <div className="flex justify-start items-center flex-wrap gap-7">
                {fixtureLive
                  .filter(
                    (match) =>
                      match.league_id.toString() === selectedLeague ||
                      selectedLeague === "" ||
                      (selectedLeague === "" && selectedDate === null)
                  )
                  .map((match) => (
                    <LivescoreCard
                      key={match.id}
                      id={match.id}
                      home={
                        match.participants?.[0].meta?.location === "home"
                          ? match.participants?.[0]?.name
                          : match.participants?.[1]?.name ||
                            match.name.split("vs")[0].trim()
                      }
                      homeLogo={match.participants?.[0]?.image_path}
                      away={
                        match.participants?.[1].meta?.location === "away"
                          ? match.participants?.[1]?.name
                          : match.participants?.[0]?.name ||
                            match.name.split("vs")[1].trim()
                      }
                      awayLogo={match.participants?.[1]?.image_path}
                      homeScore={
                        match.scores.find(
                          (item) =>
                            item.description === "CURRENT" &&
                            item.score.participant === "home"
                        )?.score?.goals || 0
                      }
                      awayScore={
                        match.scores.find(
                          (item) =>
                            item.description === "CURRENT" &&
                            item.score.participant === "away"
                        )?.score?.goals || 0
                        
                      }
                      state={
                
                        match.state?.id === 2
                          ? "PT"
                          : match.state?.id === 22
                          ? "ST"
                          : match.state?.id === 3
                          ? "ET"
                          : match.state?.id === 5 
                          ? "Fin"
                          : match.state?.id === 1
                          ? "Pronto"
                          : ""
                      }
                      time={match.periods?.[match.periods.length - 1]?.minutes || "En juego"}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>

        <div className="  w-full p-5">
          <div className="flex flex-col w-full">
            {filteredMatches.length > 0 ? (
              <div className="bg-pf-blue p-2 w-96 my-4 rounded-lg pl-7">
                <h2 className="font-bold text-xl text-white ">
                  PARTIDOS PROGRAMADOS
                </h2>
              </div>
            ) : (
              <div className="bg-pf-blue p-2 w-96 my-4 rounded-lg pl-7">
                <h2 className="font-bold text-xl text-white ">
                  NO HAY PARTIDOS PROGRAMADOS
                </h2>
              </div>
            )}

            <div className="flex justify-start items-center flex-wrap gap-7">
              {renderMatches(filteredMatches)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFixtures;