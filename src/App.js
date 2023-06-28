import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Register from "./views/Register/Register.jsx";
import Home from "./views/Home/Home.jsx";
import Competitions from "./views/Competitions/Competitions.jsx";
import Teams from "./views/Teams/Teams"
import Landing from "./views/Landing/Landing.jsx";
import NavBar from "./components/NavBar/NavBar";
import DetailLeague from "./views/DetailLeague/DetailLeague.jsx";
import DetailCup from "./views/DetailCup/DetailCup.jsx";
import CountryCompetitions from "./views/CountryCompetitions/CountryCompetitions";
import DetailTeam from "./views/DetailTeam/DetailTeam";
import TeamSearch from "./views/TeamSearch/TeamSearch";
import NotFound from "./views/404/NotFound";
import { useEffect } from "react";
import Premium from "./views/Premium/Premium";
import Success from "./views/Premium/Success";
import Profile from "./views/Profile/Profile";
import InternationalCompetitions from './views/InternationalCompetitions/InternationalCompetitions'
import DetailInternationalLeagues from './views/DetailInternationalLeagues/DetailInternationalLeagues'


function App() {
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn"); // Obtener el valor de loggedIn desde el localStorage

    // Verificar si el usuario no está logueado y se encuentra en una página distinta de inicio de sesión
    if (
      loggedIn !== "true" &&
      location.pathname !== "/" &&
      location.pathname !== "/register"
    ) {
      // Redirigir al usuario a la página de inicio de sesión
      window.location.href = "/";
    }
  }, [location.pathname]);

  return (
    <div>
      {localStorage.getItem("loggedIn") === "true" ? (
        <NavBar />
      ) : (
        (location.pathname === "/" || location.pathname === "/register") ? (
          location.pathname === "/" ? <Landing /> : <Register />
        ) : (
          // Redirigir al usuario a la página de inicio de sesión
          <Navigate to="/" />
        )
      )}

      <Routes>
        <Route exact path="/registro" element={<Register />} />
        <Route exact path="/inicio" element={<Home />} />
        <Route exact path="/teams" element={<Teams />} />
        <Route exact path="/competiciones" element={<Competitions />} />
        <Route exact path="/competitions/countries/:id" element={<CountryCompetitions/>}/>
        <Route exact path="/competitions/international" element={<InternationalCompetitions/>}/>
        <Route exact path="/competitions/international/:id" element={<DetailInternationalLeagues/>}/>
        <Route exact path="/competitions/leagues/:id" element={<DetailLeague />} />
        <Route exact path="/competitions/cups/:id" element={<DetailCup />} />
        <Route exact path="/team/:id" element={<DetailTeam />} />
        <Route exact path="/search" element={<TeamSearch />} />
        <Route exact path="/premium" element={<Premium />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;