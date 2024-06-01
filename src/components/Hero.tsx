import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to greatness begins here.</p>
        <button className="cta__button">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
