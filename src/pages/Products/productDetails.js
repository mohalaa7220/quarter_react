import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../../state/productSlice";
import { useParams } from "react-router";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SkeletonLoading from "../../components/LazyLoaing/SkeletonLoading";
const ProductDetailsUi = lazy(() =>
  import("../../components/Products/ProductDetailsUi")
);

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { productDetails, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [dispatch, productId]);

  return (
    <>
      <Breadcrumb title={productDetails.name} />
      {loading ? (
        <SkeletonLoading />
      ) : (
        <Suspense fallback={<SkeletonLoading />}>
          <ProductDetailsUi product={productDetails} />
        </Suspense>
      )}
    </>
  );
};

export default ProductDetails;
