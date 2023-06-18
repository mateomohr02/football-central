import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
/* import { getFixtureToday } from "../../redux/actions/getFixtureToday"; */
import { getFixtureByDateRange } from "../../redux/actions/getFixtureByDateRange";

import style from "./Home.module.css";
import MatchCards from "../../components/MatchCards/MatchCards";
import News from "../../components/News/News";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFixtureByDateRange());
  }, [dispatch]);

  return (
    <div className={style.mainContainer}>
      <div className={style.newsContainer}></div>
      <News/>
      <MatchCards />
    </div>
  );
};

export default Home;
