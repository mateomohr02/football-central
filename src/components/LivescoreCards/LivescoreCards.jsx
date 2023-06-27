import { useSelector } from "react-redux";
import LivescoreCard from '../../components/LivescoreCard/LivescoreCard'
import { formatMatch } from "../MatchCards/formatMatch";

const LivescoreCards = () => {
  const livescores = useSelector((state) => state.livescores.livescores);
  console.log('livescores sin formatear',livescores)
  const fixtureLive = formatMatch(livescores);
  console.log('livescores formateados',fixtureLive)
  return (
      <div className="md:h-72 flex md:flex-col justify-start gap-3 pt-3">{/* partidos en vivo */}
        <div className="md:flex md:justify-start md:items-center md:w-[85%] text-lg md:ml-1 bg-transparent md:border-2 md:border-y-2 md:border-x-0 border-b-pf-white">
          <h3 className="text-pf-white md:text-base md:font-extralight md:pl-5">
            EN VIVO
          </h3>
        </div>
        <div className="h-68 w-full px-2 gap-x-4 flex flex-row justify-start items-center whitespace-nowrap overflow-x-auto sm:w-full md:flex md:flex-row md:flex-wrap md:justify-start md:gap-2">
          {fixtureLive.slice(0, 4).map((match) => (
            <LivescoreCard
              key={match.id}
              home={
               ( match.participants?.[0].meta?.location === "home" && match.participants?.[0]?.name) || match.name.split("vs")[0].trim()
              }
              homeLogo={match.participants?.[0]?.image_path}
              away={
                match.participants?.[1]?.name || match.name.split("vs")[1].trim()
              }
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
              state={
                match.state?.id === 2
                  ? "PT"
                  : match.state?.id === 22
                  ? "ST"
                  : match.state?.id === 3
                  ? "ET"
                  : ""
              }
              time={match.periods?.[match.periods.length - 1]?.minutes || ""}
            />
          ))}
        </div>
      </div>
   
  );
}

export default LivescoreCards;
