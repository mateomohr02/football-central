import style from "./New.module.css";

const New = ({ title, image }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>{title}</h1>
      </div>
      <img src={image} alt="news" />
    </div>
  );
};

export default New;
