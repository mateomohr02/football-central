import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getFixtureToday } from "../../redux/actions/actions";


const Home = () => {
  const dispatch =useDispatch();
  const fixtureToday = useSelector(state => state.fixtureToday)

  useEffect(() => {
    dispatch(getFixtureToday)
  },[dispatch])


  return (
    <div>
      
    </div>
  );
};

export default Home;
