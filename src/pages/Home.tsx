import { FC } from "react";
import Hero from "../components/Hero";
import HomeHeader from "../components/HomeHeader";
import FeaturedProducts from "../components/FeaturedProducts";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <div className="featured__products">
        <h2>Featured Products</h2>
        <div className="heading__border"></div>
        <div className="featured__products__content">
          <FeaturedProducts />
        </div>
      </div>
    </>
  );
};

export default Home;
