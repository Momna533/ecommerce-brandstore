import { FC } from "react";
import Hero from "../components/Hero";
import HomeHeader from "../components/HomeHeader";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import featuredProductImg from "../assets/sports-shoe3-300x300.jpg";

const Home: FC = () => {
  return (
    <>
      <HomeHeader />
      <Hero />
      <div className="featured__products">
        <h2>Featured Products</h2>
        <div className="divider"></div>
        <div className="featured__products__content">
          <div className="featured__products__card">
            <Link to={`/product/${"shirt"}`}>
              <div className="featured__products__card__image">
                <img src={featuredProductImg} alt="product" />
              </div>
            </Link>
            <div className="featured__products__card__content">
              <Link to={`/product/${"shirt"}`}>
                <h4>Product Name</h4>
              </Link>
              <p>Product Category</p>
              <p>$100</p>
              <div className="variations"></div>
              <div className="rating"></div>
              <div className="featured__products__card__content__cart">
                <button className="featured__products__card__content__cart__btn">
                  <FaCartShopping />
                </button>
              </div>
            </div>
          </div>
          <div className="featured__products__card">
            <Link to={`/product/${"shirt"}`}>
              <div className="featured__products__card__image">
                <img src={featuredProductImg} alt="product" />
              </div>
            </Link>
            <div className="featured__products__card__content">
              <Link to={`/product/${"shirt"}`}>
                <h4>Product Name</h4>
              </Link>
              <p>Product Category</p>
              <p>$100</p>
              <div className="variations"></div>
              <div className="rating"></div>
              <div className="featured__products__card__content__cart">
                <button className="featured__products__card__content__cart__btn">
                  <FaCartShopping />
                </button>
              </div>
            </div>
          </div>
          <div className="featured__products__card">
            <Link to={`/product/${"shirt"}`}>
              <div className="featured__products__card__image">
                <img src={featuredProductImg} alt="product" />
              </div>
            </Link>
            <div className="featured__products__card__content">
              <Link to={`/product/${"shirt"}`}>
                <h4>Product Name</h4>
              </Link>
              <p>Product Category</p>
              <p>$100</p>
              <div className="variations"></div>
              <div className="rating"></div>
              <div className="featured__products__card__content__cart">
                <button className="featured__products__card__content__cart__btn">
                  <FaCartShopping />
                </button>
              </div>
            </div>
          </div>
          <div className="featured__products__card">
            <Link to={`/product/${"shirt"}`}>
              <div className="featured__products__card__image">
                <img src={featuredProductImg} alt="product" />
              </div>
            </Link>
            <div className="featured__products__card__content">
              <Link to={`/product/${"shirt"}`}>
                <h4>Product Name</h4>
              </Link>
              <p>Product Category</p>
              <p>$100</p>
              <div className="variations"></div>
              <div className="rating"></div>
              <div className="featured__products__card__content__cart">
                <button className="featured__products__card__content__cart__btn">
                  <FaCartShopping />
                </button>
              </div>
            </div>
          </div>
          <div className="featured__products__card">
            <Link to={`/product/${"shirt"}`}>
              <div className="featured__products__card__image">
                <img src={featuredProductImg} alt="product" />
              </div>
            </Link>
            <div className="featured__products__card__content">
              <Link to={`/product/${"shirt"}`}>
                <h4>Product Name</h4>
              </Link>
              <p>Product Category</p>
              <p>$100</p>
              <div className="variations"></div>
              <div className="rating"></div>
              <div className="featured__products__card__content__cart">
                <button className="featured__products__card__content__cart__btn">
                  <FaCartShopping />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
