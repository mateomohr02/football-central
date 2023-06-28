import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFixtureByDateRange } from "../../redux/actions/getFixtureByDateRange";
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
          dispatch(getFixtureByDateRange()),
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
