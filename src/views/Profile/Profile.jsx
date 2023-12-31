import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../redux/actions/getProfile";
import { Link, useNavigate } from "react-router-dom";
import StarsIcon from "@mui/icons-material/Stars";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import style from "./Profile.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Profile = () => {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");

  const navigate = useNavigate();

  const previewFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    }
  };
  const handleFile = (event) => {
    // console.log(event.target.files[0]);
    const file = event.target.files[0];
    setFile(file);
    previewFile(file);
  };

  const user = useSelector((state) => state.user.userProfile);
  const currentProfilePic = user.image?.imageUrl;
  const dispatch = useDispatch();
  const loggedUserID = localStorage.getItem("id");
  console.log("LOGGED ID:", loggedUserID);

  const handleFileSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.put(`/users/image/${loggedUserID}`, { image });
    console.log(result);
    try {
      const uploadedImage = result.data.public_id;
      setUploadedImage(uploadedImage);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getProfile(loggedUserID)); // Verifica que loggedUserID tenga un valor válido
  }, [dispatch, loggedUserID]);
  console.log("loggedUserID:", loggedUserID);

  console.log(user.role, "ROL USER");

  return (
    <>
      <div className={style.container}>
        <div className={style.profileSection}>
          {currentProfilePic ? (
            <img
              src={currentProfilePic}
              alt="currentProfilePic"
              className={style.profilePic}
            />
          ) : (
            <AccountCircleIcon
              fontSize="large"
              className="text-pf-white text-2xl"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            />
          )}
          <form onSubmit={(event) => handleFileSubmit(event)}>
            <label htmlFor="fileInput" className={style.label}>
              Cambiar foto de perfil
            </label>
            <input
              id="fileInput"
              type="file"
              onChange={(event) => handleFile(event)}
              required
              accept="image/png, image/jpg, image/jpeg"
              style={{ display: "none" }} // Hide the file input
            />
          </form>
        </div>
        {image && (
          <div className={style.previewSection}>
            <img
              src={image}
              alt="profilePicture"
              className={style.profilePic}
            />
            <h3 className={style.confirm} onClick={handleFileSubmit}>
              Confirmar Cambios
            </h3>
            <h3
              className={style.cancel}
              onClick={(click) => window.location.reload()}
            >
              Cancelar Cambios
            </h3>
          </div>
        )}
        <div className={style.textCont}>
          <h3 className={style.text}>Username:</h3>
          <h3 className={style.textBox}>{user.username}</h3>
          <h3 className={style.text}>Email:</h3>
          <h3 className={style.textBox}>{user.email}</h3>
          <h3 className={style.text}>
            Cuenta:
            {user.isPremium === false ? (
              <h3 className={style.textBox}>Estandar</h3>
            ) : (
              <h3 className={style.textBox}>Premium</h3>
            )}
            <span>
              {user?.isPremium === false ? (
                <Link to="/premium">
                  <button className={style.button}>Suscríbete a premium</button>
                </Link>
              ) : (
                <StarsIcon />
              )}
            </span>
          </h3>
        </div>
      </div>
      <div className="flex justify-center">
        {user.role === "admin" && (
          <button
            onClick={() => navigate("/admin")}
            className="bg-red-500 text-white py-4 px-8 rounded-lg"
          >
            PANEL DE ADMINISTRADOR
          </button>
        )}
      </div>
    </>
  );
};

export default Profile;
