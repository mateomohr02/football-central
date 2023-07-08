import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postProduct } from "../../redux/actions/postProduct";
import { resetNewProduct } from "../../redux/actions/resetNewProduct";
import validate from "./validateProduct";
import { fetchProducts } from "../../redux/actions/action-store";

const AdminStore = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userProfile);
  const allProducts = useSelector((state) => state.store.products);
  const [newProduct, setNewProduct] = useState({});
  const [errors, setErrors] = useState({
    name: "",
    price: "",
    description: "",
    lifeLength: "",
    sku: "",
    stock: "",
    category: "",
    brand: "",
    image_path: "",
  });
  const [refreshTable, setRefreshTable] = useState(false);

  if (user.role !== "admin") {
    navigate("/404");
  }

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...newProduct,
        [e.target.name]: e.target.value,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, refreshTable]);

  const handleSubmit = (e, product) => {
    e.preventDefault();
    console.log("PRODUCTO DISPATCH: ", product);
    dispatch(postProduct(product));
    setRefreshTable(true); // Activar la actualización de la tabla después de agregar un producto
  };

  useEffect(() => {
    dispatch(fetchProducts()); // Actualizar la lista de productos al cargar el componente
    setRefreshTable(false); // Restablecer el estado de actualización de la tabla a falso
  }, [dispatch, refreshTable]);

  return (
    <>
      <div className="container pl-10 pb-10">
        <br />
        <h3 className="text-lg font-bold text-white">Nuevo Producto</h3>
        <form className="mt-4" onSubmit={(e) => handleSubmit(e, newProduct)}>
          <div className="bg-gray-200 p-4 rounded">
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  value={newProduct.name || ""}
                  name="name"
                  onChange={handleChange}
                  className={`border rounded py-2 px-3 w-full ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {newProduct.name === ""
                  ? ""
                  : errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
              </div>

              <div className="mb-4">
                <label className="block font-medium text-gray-700">
                  Precio
                </label>
                <input
                  type="text"
                  value={newProduct.price || ""}
                  name="price"
                  onChange={handleChange}
                  className={`border rounded py-2 px-3 w-full ${
                    errors.price ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {newProduct.price === ""
                  ? ""
                  : errors.price && (
                      <p className="text-red-500 text-sm">{errors.price}</p>
                    )}
              </div>

              <div className="mb-4">
                <label className="block font-medium text-gray-700">
                  Descripción
                </label>
                <input
                  type="text"
                  value={newProduct.description || ""}
                  name="description"
                  onChange={handleChange}
                  className={`border rounded py-2 px-3 w-full ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {newProduct.description === ""
                  ? ""
                  : errors.description && (
                      <p className="text-red-500 text-sm">
                        {errors.description}
                      </p>
                    )}
              </div>

              <div className="mb-4">
                <label className="block font-medium text-gray-700">SKU</label>
                <input
                  type="text"
                  value={newProduct.sku || ""}
                  name="sku"
                  onChange={handleChange}
                  className={`border rounded py-2 px-3 w-full ${
                    errors.sku ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {newProduct.sku === ""
                  ? ""
                  : errors.sku && (
                      <p className="text-red-500 text-sm">{errors.sku}</p>
                    )}
              </div>

              <div className="mb-4">
                <label className="block font-medium text-gray-700">Stock</label>
                <input
                  type="text"
                  value={newProduct.stock || ""}
                  name="stock"
                  onChange={handleChange}
                  className={`border rounded py-2 px-3 w-full ${
                    errors.stock ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {newProduct.stock === ""
                  ? ""
                  : errors.stock && (
                      <p className="text-red-500 text-sm">{errors.stock}</p>
                    )}
              </div>

              <div className="mb-4">
                <label className="block font-medium text-gray-700">
                  Categoría
                </label>
                <input
                  type="text"
                  value={newProduct.category || ""}
                  name="category"
                  onChange={handleChange}
                  className={`border rounded py-2 px-3 w-full ${
                    errors.category ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {newProduct.category === ""
                  ? ""
                  : errors.category && (
                      <p className="text-red-500 text-sm">{errors.category}</p>
                    )}
              </div>

              <div className="mb-4">
                <label className="block font-medium text-gray-700">Marca</label>
                <input
                  type="text"
                  value={newProduct.brand || ""}
                  name="brand"
                  onChange={handleChange}
                  className={`border rounded py-2 px-3 w-full ${
                    errors.brand ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {newProduct.brand === ""
                  ? ""
                  : errors.brand && (
                      <p className="text-red-500 text-sm">{errors.brand}</p>
                    )}
              </div>

              <div className="mb-4">
                <label className="block font-medium text-gray-700">
                  URL de la Imágen
                </label>
                <input
                  type="text"
                  value={newProduct.image_path || ""}
                  name="image_path"
                  onChange={handleChange}
                  className={`border rounded py-2 px-3 w-full ${
                    errors.image_path ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {newProduct.image_path === ""
                  ? ""
                  : errors.image_path && (
                      <p className="text-red-500 text-sm">
                        {errors.image_path}
                      </p>
                    )}
              </div>
            </div>

            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              PUBLICAR
            </button>
          </div>
        </form>

        <h2 className="mt-16 text-white">Artículos en el inventario</h2>
        <table className="mt-6 w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b text-center">Nombre</th>
              <th className="py-2 px-4 border-b text-center">Precio</th>
              <th className="py-2 px-4 border-b text-center">Descripción</th>
              <th className="py-2 px-4 border-b text-center">SKU</th>
              <th className="py-2 px-4 border-b text-center">Stock</th>
              <th className="py-2 px-4 border-b text-center">Categoría</th>
              <th className="py-2 px-4 border-b text-center">Marca</th>
              {/* <th className="py-2 px-4 border-b text-center">Imagen</th> */}
              <th className="py-2 px-4 border-b text-center">Editar</th>
              <th className="py-2 px-4 border-b text-center">Deshabilitar</th>
              <th className="py-2 px-4 border-b text-center">Borrar</th>
            </tr>
          </thead>
          <tbody>
            {allProducts ? (
              allProducts?.map((p, index) => (
                <tr
                  key={p?.sku}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  } hover:bg-gray-200`}
                >
                  <td className="py-2 px-4 border-b text-center">{p?.name}</td>
                  <td className="py-2 px-4 border-b text-center">
                    ${p?.price}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {p?.description}
                  </td>
                  <td className="py-2 px-4 border-b text-center">{p?.sku}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {p?.stock}un
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {p?.category}
                  </td>
                  <td className="py-2 px-4 border-b text-center">{p?.brand}</td>
                  {/* <td className="py-2 px-4 border-b text-center">
                    {p?.image_path}
                  </td> */}
                  <td className="py-2 px-4 border-b text-center">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                      Editar
                    </button>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600">
                      Deshabilitar
                    </button>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                      Borrar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-2 px-4 border-b text-center">
                  No existen productos
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminStore;
