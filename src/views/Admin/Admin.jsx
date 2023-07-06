import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UpgradeUser from "../../components/UpgradeUser/UpgradeUser";
import StoreManagerAdmin from "../../components/StoreManagerAdmin/StoreManagerAdmin";

const Admin = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userProfile);

  if (user.role !== "admin") {
    navigate("/404");
  }

  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 rounded-lg shadow-lg p-6">
            <UpgradeUser />
          </div>
          <div className="bg-gray-200 rounded-lg shadow-lg p-6">
            <StoreManagerAdmin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
