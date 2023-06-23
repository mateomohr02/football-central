import logo from "../../assets/logo.svg";
import style from "./Landing.module.css";
import Login from "../../components/Login/Login";

const Landing = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.backgroundShape}>
      <Login />
      </div>
      <img src={logo} alt="logo" className={style.logo} />
    </div>
  );
};

export default Landing;
