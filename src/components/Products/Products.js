import React, { lazy, Suspense } from "react";
import SkeletonLoading from "../LazyLoaing/SkeletonLoading";
const ProductCard = lazy(() => import("./ProductCard"));

const ProductsParent = ({ data }) => {
  return (
    <>
      <Suspense fallback={<SkeletonLoading />}>
        {data?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </Suspense>
    </>
  );
};

export default ProductsParent;
