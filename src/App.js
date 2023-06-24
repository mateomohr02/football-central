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
import TeamSearch from "./views/TeamSearch/TeamSearch";
import NotFound from "./views/404/NotFound";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' || location.pathname === '/registro' ? (
      location.pathname === '/' ? <Landing /> : <Register />
      ) : (
      <NavBar />
      )}
      <Routes>
        <Route exact path="/registro" element={<Register />} />
        <Route exact path="/inicio" element={<Home />} />
        <Route exact path="/comunidad" element={<Community />} />
        <Route path="/competiciones" element={<Competitions />} />
        <Route
          exact
          path="/competiciones/paises/:id"
          element={<CountryCompetitions />}
        />
        <Route
          exact
          path="/competiciones/ligas/:id"
          element={<DetailLeague />}
        />
        <Route
          exact
          path="/competiciones/copas/:id"
          element={<DetailCup />}
        /> 
        
        <Route exact path="/equipo/:id" element={<DetailTeam/>}/>

        <Route exact path="/busqueda" element={<TeamSearch />}/>

        <Route exact path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
