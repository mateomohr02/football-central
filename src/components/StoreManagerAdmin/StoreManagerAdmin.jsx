import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../redux/actions/action-store";
import { useNavigate } from "react-router-dom";

const StoreManagerAdmin = () => {
  const allProduts = useSelector((state) => state.store.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(allProduts, "PRODUCTOS");

  return (
    <div>
      <div>
        <h4>
          Hay {allProduts.length} productos en el inventario
        </h4>
      </div>

      <br />
      <button
        className="rounded-b-lg bg-blue-500 text-white py-2 px-4 mt-4"
        style={{ width: "30%" }}
        onClick={() => navigate("/admin/addProducts")}
      >
        Manejar Inventario
      </button>
    </div>
  );
};

export default StoreManagerAdmin;
