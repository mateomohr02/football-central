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
        <Route path="/registro" element={<Register />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/competiciones" element={<Competitions />} />
        <Route
          path="/competitions/countries/:id"
          element={<CountryCompetitions />}
        />
        <Route path="/competitions/leagues/:id" element={<DetailLeague />} />
        <Route path="/competitions/cups/:id" element={<DetailCup />} />
        <Route path="/team/:id" element={<DetailTeam />} />
        <Route path="/search" element={<TeamSearch />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/success" element={<Success />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;