import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../state/productSlice";
import SkeletonLoading from "../LazyLoaing/SkeletonLoading";
const ProductsParent = lazy(() => import("../Products/Products"));

const ProductsHome = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
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
              <ProductsParent data={data.slice(0, 6)} />
            </Suspense>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsHome;
