import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLastProducts } from "../../state/productSlice";
import SkeletonLoading from "../LazyLoaing/SkeletonLoading";
const ProductsParent = lazy(() => import("../Products/Products"));

const ProductsHome = () => {
  const dispatch = useDispatch();
  const { lastProducts, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchLastProducts());
  }, [dispatch]);

  return (
    <section className="featured pt-7">
      <div className="container">
        <div
          class="services-heading text-center aos-init aos-animate"
          data-aos="fade-up"
        >
          <h6 class="sec-heading">Properties</h6>
          <h1>Featured Listings</h1>
        </div>
        <div className="row">
          {loading ? (
            <SkeletonLoading />
          ) : (
            <Suspense fallback={<SkeletonLoading />}>
              <ProductsParent grid={true} data={lastProducts} />
            </Suspense>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsHome;
