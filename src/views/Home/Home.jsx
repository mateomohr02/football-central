import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
/* import { getFixtureToday } from "../../redux/actions/getFixtureToday"; */
import { getFixtureByDateRange } from "../../redux/actions/getFixtureByDateRange";
import { getLivescores } from "../../redux/actions/getLiveScores";
import { getLivescoresLatest } from "../../redux/actions/getLivescoresLatest";
import MatchCards from "../../components/MatchCards/MatchCards";
import News from "../../components/News/News";
import TeamCards from "../../components/TeamCards/TeamCards";


const Home = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getLivescores());
    dispatch(getLivescoresLatest());
    dispatch(getFixtureByDateRange());
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
