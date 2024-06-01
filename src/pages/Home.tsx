import { FC } from "react";
import Hero from "../components/Hero";
import HomeHeader from "../components/HomeHeader";

const Home: FC = () => {
  return (
    <div>
      <HomeHeader />
      <Hero />
    </div>
  );
};

export default Home;
