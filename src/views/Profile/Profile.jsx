import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../redux/actions/getProfile";
import { Link, useNavigate } from "react-router-dom";
import StarsIcon from "@mui/icons-material/Stars";
import axios from "axios";
import { Center, Flex } from "@chakra-ui/layout";

const Profile = () => {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");

  const navigate = useNavigate()

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

  const openFileInput = () => {
    document.getElementById("fileInput").click();
  };

  useEffect(() => {
    dispatch(getProfile(loggedUserID)); // Verifica que loggedUserID tenga un valor válido
  }, [dispatch, loggedUserID]);
  console.log("loggedUserID:", loggedUserID);

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-4xl mb-8">Profile</h1>
      <div className="bg-white rounded-lg p-8">
        <div>
          {/* <h3>ID: {user?.id}</h3> */}
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            {currentProfilePic && (
              <img
                src={currentProfilePic}
                alt="currentProfilePic"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onClick={openFileInput}
              />
            )}
          </div>
          <h3>UserName: {user.username}</h3>
          <h3>Email: {user.email}</h3>
          {/* <h3>Rol: {user.role}</h3> */}
          <h3>
            Premium: {user.isPremium === false ? "No" : "Si"}
            <span>
              {user?.isPremium === false ? (
                <Link to="/premium">
                  <button className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Suscribirse
                  </button>
                </Link>
              ) : (
                <StarsIcon />
              )}
            </span>
          </h3>
          <form onSubmit={(event) => handleFileSubmit(event)}>
            <label
              htmlFor="fileInput"
              className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style={{
                cursor: "pointer",
              }}
            >
              Add Profile Pic
            </label>
            <input
              id="fileInput"
              type="file"
              onChange={(event) => handleFile(event)}
              required
              accept="image/png, image/jpg, image/jpeg"
              style={{ display: "none" }} // Hide the file input
            />
            {image && (
              <img
                src={image}
                alt="profilePicture"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            )}
            <button className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Profile Pic
            </button>
          </form>
        </div>
      </div>
      {user.role === 'admin' ?(<div>
        <button onClick={() => navigate('/admin')}>Panel de Administrador</button>
      </div>) : ''
      }
      
    </div>
  );
};

export default Profile;
