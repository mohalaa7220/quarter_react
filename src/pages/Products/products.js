import React, { useEffect, useState, lazy, Suspense } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../state/productSlice";
import { setPage } from "../../state/pagination";
import Paginate from "../../components/ReactPaginate/ReactPaginate";
import SkeletonLoading from "../../components/LazyLoaing/SkeletonLoading";
import { GoSearch } from "react-icons/go";
const ProductsParent = lazy(() => import("../../components/Products/Products"));

const Products = () => {
  const dispatch = useDispatch();
  const { data, count, loading } = useSelector((state) => state.products);
  const { page } = useSelector((state) => state.pagination);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
    setPageCount(Math.ceil(count / 6));
  }, [count, dispatch, page]);

  const handlePageClick = (data) => {
    let currentPage = data.selected + 1;
    dispatch(setPage(currentPage));
  };

  return (
    <section className="products pt-7">
      <div className="container">
        <div className="row">
          <div className="ltn__search-widget mb-5">
            <form action="#">
              <input
                type="search"
                name="search"
                className="form-control"
                placeholder="Search your keyword..."
              />
              <button type="submit">
                <GoSearch />
              </button>
            </form>
          </div>
          {loading ? (
            <SkeletonLoading />
          ) : (
            <Suspense fallback={<SkeletonLoading />}>
              <ProductsParent data={data} />
            </Suspense>
          )}
        </div>

        <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
    </section>
  );
};

export default Products;
