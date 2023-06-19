import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
/* import { getFixtureToday } from "../../redux/actions/getFixtureToday"; */
import { getFixtureByDateRange } from "../../redux/actions/getFixtureByDateRange";
import NavBar from '../../components/NavBar/NavBar'
import style from "./Home.module.css";
import MatchCards from "../../components/MatchCards/MatchCards";
import News from "../../components/News/News";
import TeamCards from "../../components/TeamCards/TeamCards";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFixtureByDateRange());
  }, [dispatch]);

  return (
    <div className={style.mainContainer}>
      <NavBar/>
      <div className={style.newsContainer}></div>

      <TeamCards />
      <News />
      <MatchCards />
    </div>
  );
};

export default Home;
