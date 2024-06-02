import { FC } from "react";
import { useParams } from "react-router-dom";

const SingleProduct: FC = () => {
  const { slug } = useParams();
  return <div>SingleProduct{slug}</div>;
};

export default SingleProduct;
