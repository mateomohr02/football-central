import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Register from "./views/Register/Register.jsx";
import Home from "./views/Home/Home.jsx";
import Competitions from "./views/Competitions/Competitions.jsx";
import Community from "./views/Community/Community.jsx";
import Landing from "./views/Landing/Landing.jsx";
import NavBar from "./components/NavBar/NavBar";
import DetailCompetition from "./views/DetailCompetition/DetailCompetition.jsx";
import CountryCompetitions from "./views/CountryCompetitions/CountryCompetitions";
import Profile from './views/Profile/Profile';

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' || '/register' ? location.pathname === '/' ? <Landing/> : "" : location.pathname === 'register' ? <Register/> :  <NavBar/>}

      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/competitions" element={<Competitions />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route
          exact
          path="/competitions/country/:id"
          element={<CountryCompetitions />}
        />
        <Route
          exact
          path="/competitions/league/:id"
          element={<DetailCompetition />}
        />
      </Routes>
    </div>
  );
}

export default App;
