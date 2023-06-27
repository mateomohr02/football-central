import TeamCard from "../TeamCard/TeamCard";

import { useSelector } from "react-redux";

const afaId = [
  32, 470, 520, 587, 887, 3139, 3365, 3393, 3608, 3930, 5855, 6829, 7228, 8228,
  9335, 9561, 9878, 9884, 9896, 9904, 9931, 9941, 9999, 10002, 10675, 10840,
  10987, 14212,
];

const TeamCards = () => {
  const teams = useSelector((state) => state.team.teamByCountryId);

  const teamsAFA = teams.filter((team) => afaId.includes(team.id));

  console.log("teams", teamsAFA);
  if (!teamsAFA) {
    return null;
  }

  return (
    <div className="bg-white w-full h-[60px] mt-5 flex md:justify-center md:items-center gap-1.5 ">
      {teamsAFA.map((team) => (
        <TeamCard key={team.id} logo={team?.image_path} />
      ))}
    </div>
  );
};

export default TeamCards;
