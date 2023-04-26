import ProductCard from "./ProductCard";

const ProductsParent = ({ data }) => {
  return (
    <>
      {data?.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </>
  );
};

export default ProductsParent;
