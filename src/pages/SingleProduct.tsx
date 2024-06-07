import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const SingleProduct: FC = () => {
  const { slug } = useParams();
  const { products, setProducts } = useGlobalContext();
  const singleProduct = products.find((product) => product.title === slug);
  const { id, img, title, price, category } = singleProduct;
  return <div>SingleProduct{slug}</div>;
};

export default SingleProduct;
