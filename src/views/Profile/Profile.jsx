import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../redux/actions/getProfile";
import { updateUserImage } from "../../redux/actions/updateUserImage";
import { Link } from "react-router-dom";
import StarsIcon from "@mui/icons-material/Stars";
import axios from "axios";

const Profile = () => {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("")

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
  const dispatch = useDispatch();
  const loggedUserID = localStorage.getItem("id");
  console.log("LOGGED ID:", loggedUserID);

  const handleFileSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.put(`/users/image/${loggedUserID}`, {image})
    console.log(result)
    try {
      const uploadedImage = result.data.public_id
       setUploadedImage(uploadedImage)

    } catch (error) {
      console.log(error)
    }
    // dispatch(updateUserImage(loggedUserID, image));
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

          <form onSubmit={(event) => handleFileSubmit(event)}>
            <input
              type="file"
              onChange={(event) => handleFile(event)}
              required
              accept="image/png, image/jpg, image/jpeg"
            />
            <button className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Profile Pic
            </button>
          </form>
          {image && <img src={image} alt="profilePicture" />}
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
