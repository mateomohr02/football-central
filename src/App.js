import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
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
import { useEffect } from "react";

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
        (location.pathname === '/' || location.pathname === '/register') ? (
          location.pathname === '/' ? <Landing /> : <Register />
        ) : (
          // Redirigir al usuario a la página de inicio de sesión
          <Navigate to="/" />
        )
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

        <Route exact path="/search" element={<TeamSearch />}/>
      </Routes>
    </div>
  );
}

export default App;
