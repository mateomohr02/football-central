import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Register from "./views/Register/Register.jsx";
import Home from "./views/Home/Home.jsx";
import Competitions from "./views/Competitions/Competitions.jsx";
import Community from "./views/Community/Community.jsx";
import Landing from "./views/Landing/Landing.jsx";
import NavBar from "./components/NavBar/NavBar";
import DetailLeague from "./views/DetailLeague/DetailLeague.jsx";
import DetailCup from "./views/DetailCup/DetailCup.jsx"
import CountryCompetitions from "./views/CountryCompetitions/CountryCompetitions";
import DetailTeam from "./views/DetailTeam/DetailTeam";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' || location.pathname === '/register' ? (
      location.pathname === '/' ? <Landing /> : <Register />
      ) : (
      <NavBar />
      )}
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/competitions" element={<Competitions />} />
        <Route exact path="/community" element={<Community />} />
        <Route
          exact
          path="/competitions/country/:id"
          element={<CountryCompetitions />}
        />
        <Route
          exact
          path="/competitions/league/:id"
          element={<DetailLeague />}
        />
        <Route
          exact
          path="/competitions/cup/:id"
          element={<DetailCup />}
        />  
        <Route exact path="/team/:id" element={<DetailTeam/>}/>
      </Routes>
    </div>
  );
}

export default App;
