import React from "react";
import { useParams } from "react-router-dom";

import ArgSuperliga from "../../components/ArgSuperliga/ArgSuperliga";
import ArgSupercup from "../../components/ArgSupercup/ArgSupercup";
import Bundesliga1 from "../../components/Bundesliga1/Bundesliga1";
import Bundesliga2 from "../../components/Bundesliga2/Bundesliga2";
import GerDBFPokal from "../../components/GerDBFPokal/GerDBFPokal";
import EngPremier from "../../components/EngPremier/EngPremier";
import EngChamp from "../../components/EngChamp/EngChamp";
import EngLeagueOne from "../../components/EngLeagueOne/EngLeagueOne";
import EngNationalLeague from "../../components/EngNationalLeague/EngNationalLeague";
import EngCommunityShield from "../../components/EngCommunityShield/EngCommunityShield";
import EngFACup from "../../components/EngFACup/EngFACup";
import EngCarabaoCup from "../../components/EngCarabaoCup/EngCarabaoCup";
import EngWomenSuperLeague from "../../components/EngWomenSuperLeague/EngWomenSuperLeague";
import EngLeagueTwo from "../../components/EngLeagueTwo/EngLeagueTwo";

const DetailLeague = () => {
  const { id } = useParams();

  return (
    <div>
      {id === "636" ? (
        <ArgSuperliga />
      ) : id === "1502" ? (
        <ArgSupercup />
      ) : id === "82" ? (
        <Bundesliga1 />
      ) : id === "85" ? (
        <Bundesliga2 />
      ) : id === "109" ? (
        <GerDBFPokal />
      ) : id === "8" ? (
        <EngPremier />
      ) : id === "9" ? (
        <EngChamp />
      ) : id === "12" ? (
        <EngLeagueOne />
      ) : id === "17" ? (
        <EngNationalLeague />
      ) : id === "23" ? (
        <EngCommunityShield />
      ) : id === "24" ? (
        <EngFACup />
      ) : id === "27" ? (
        <EngCarabaoCup />
      ) : id === "45" ? (
        <EngWomenSuperLeague />
      ) : id === "14" ? (
        <EngLeagueTwo />
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailLeague;
