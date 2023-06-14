import logo from "../../assets/logo.svg";
import shape from "../../assets/landing/shape.svg";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.mainContainer}>
      <img src={shape} alt="" className={style.shape} />
      <img src={logo} alt="logo" className={style.logo}/>
    </div>
  );
};

export default Landing;
