import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFixtureByDateRange } from "../../redux/actions/getFixtureByDateRange";
import { getLivescores } from "../../redux/actions/getLiveScores";
import { getLivescoresLatest } from "../../redux/actions/getLivescoresLatest";
import MatchCards from "../../components/MatchCards/MatchCards";
import News from "../../components/News/News";
import TeamCards from "../../components/TeamCards/TeamCards";
import {getTeamByCountryId} from '../../redux/actions/getTeamByCountryId'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          dispatch(getTeamByCountryId(44)),
          dispatch(getLivescores()),
          dispatch(getLivescoresLatest()),
          dispatch(getFixtureByDateRange()),
        ]);
      } catch (error) {
        console.log(error.message);
      }
    };
    
    // Llama a la función por primera vez para obtener los datos inmediatamente
    fetchData();
    
    // Ejecuta la función cada 15 segundos
    setInterval(fetchData, 15000);

  }, [dispatch]);

  return (
    <div>
      <TeamCards />
      <News />
      <MatchCards />
    </div>
  );
};

export default Home;
