import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1>Raining Offers For Hot Summer!</h1>
        <p>25% Off On All Products</p>
        <div className="cta__btns">
          <button className="cta__button primary__btn">Shop Now</button>
          <button className="cta__button secondary__btn">Fnd More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
