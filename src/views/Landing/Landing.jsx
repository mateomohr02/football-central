import logo from "../../assets/logo.svg";
import shape from "../../assets/landing/shape.svg";
import style from "./Landing.module.css";
import Login from '../../components/Login/Login'

const Landing = () => {
  return (
    <div className={style.mainContainer}>
      <img src={shape} alt="" className={style.shape} />
      <Login/>
      <img src={logo} alt="logo" className={style.logo}/>
    </div>
  );
};

export default Landing;
