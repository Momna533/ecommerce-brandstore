import { useGlobalContext } from "../context/Context";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = () => {
  const { featuredProducts } = useGlobalContext();
  return (
    <>
      {featuredProducts.map((item) => (
        <FeaturedProduct key={item.id} {...item} />
      ))}
    </>
  );
};

export default FeaturedProducts;
