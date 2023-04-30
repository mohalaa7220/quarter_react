import React, { lazy, Suspense } from "react";
import SkeletonLoading from "../LazyLoaing/SkeletonLoading";
const ProductCard = lazy(() => import("./ProductCard"));

const ProductsParent = ({ data, grid }) => {
  return (
    <>
      <Suspense fallback={<SkeletonLoading />}>
        {data?.map((product) => {
          return <ProductCard product={product} key={product.id} grid={grid} />;
        })}
      </Suspense>
    </>
  );
};

export default ProductsParent;
