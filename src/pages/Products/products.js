import React, { useEffect, useState, lazy, Suspense } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../state/productSlice";
import { setPage } from "../../state/pagination";
import Paginate from "../../components/ReactPaginate/ReactPaginate";
import SkeletonLoading from "../../components/LazyLoaing/SkeletonLoading";
import { GoSearch } from "react-icons/go";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import useDebounce from "../../utils/useDebounce";
import StateFilters from "../../components/Filters/StateFilters";
import AmenitiesFilters from "../../components/Filters/AmenitiesFilters";
const ProductsParent = lazy(() => import("../../components/Products/Products"));

const Products = () => {
  const dispatch = useDispatch();
  const { data, count, loading } = useSelector((state) => state.products);
  const { page } = useSelector((state) => state.pagination);
  const [pageCount, setPageCount] = useState(0);
  const [name, setName] = useState("");
  const [state, setState] = useState(null);
  const debouncedState = useDebounce(state, 1000);
  const debouncedName = useDebounce(name, 1000);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (debouncedName.trim() !== "" || debouncedState !== "") {
      dispatch(fetchProducts({ name: debouncedName, state: debouncedState }));
    } else {
      dispatch(fetchProducts());
    }
    setPageCount(Math.ceil(count / 6));
  }, [count, dispatch, page, debouncedName, debouncedState]);

  const handlePageClick = (data) => {
    let currentPage = data.selected + 1;
    dispatch(setPage(currentPage));
  };

  return (
    <>
      <Breadcrumb title="Shop" />
      <section className="products pt-7">
        <div className="container">
          <div className="row">
            {/* Form Search Input */}
            <div className="ltn__search-widget mb-5">
              <div className="form">
                <input
                  type="search"
                  name="search"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Search your keyword..."
                />
                <button type="submit">
                  <GoSearch />
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="col-lg-3">
              <div className="widget">
                <StateFilters state={state} setState={setState} />
                <AmenitiesFilters
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </div>
            </div>

            {/* Products */}
            <div className="col-lg-9">
              <div className="row">
                {loading ? (
                  <SkeletonLoading />
                ) : (
                  <Suspense fallback={<SkeletonLoading />}>
                    <ProductsParent data={data} />
                  </Suspense>
                )}
              </div>
            </div>
          </div>

          <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
      </section>
    </>
  );
};

export default Products;
