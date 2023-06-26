import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../../redux/actions/getProfile';

const Profile = () => {
  const user = useSelector(state => state.userProfile);
  const dispatch = useDispatch();
  const loggedUserID = localStorage.getItem("id");
  console.log("LOGGED ID:", loggedUserID);

  useEffect(() => {
    dispatch(getProfile(loggedUserID));
  }, [dispatch, loggedUserID]);
  console.log("USER LOGGED:", user);

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;