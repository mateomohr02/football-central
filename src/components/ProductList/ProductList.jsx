import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/action-store";
import Product from "../Product/Product";
import ReactPaginate from "react-paginate";
import style from "./ProductList.module.css";
const ProductList = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage")) || 0
  );
  const [totalPages, setTotalPages] = useState(0);
  const products = useSelector((state) => state.store.products);
  const itemsPerPage = 3;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setTotalPages(Math.ceil(products.length / itemsPerPage));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const page = products.slice(startIndex, endIndex);

  const showPrevButton = currentPage > 0;
  const showNextButton = currentPage < totalPages - 1;

  return (
    <div>
      <div className={style.productCards}>
        {page?.map((product) => (
          <Product
            id={product.id}
            key={product.id}
            image={product.image_path}
            name={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </div>
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        previousLabel={showPrevButton ? "< prev" : null}
        nextLabel={showNextButton ? "next >" : null}
        containerClassName={style.pagination}
        pageClassName={style.pageNum}
        previousLinkClassName={style.pageNum}
        nextLinkClassName={style.pageNum}
        activeLinkClassName={style.active}
      />
    </div>
  );
};

export default ProductList;
