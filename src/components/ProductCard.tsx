import { FC } from "react";
import { Link } from "react-router-dom";
import productImg from "../assets/footwear-free-img.jpg";
import { FaCartShopping } from "react-icons/fa6";
const ProductCard: FC = () => {
  return (
    <div className="products__card">
      <Link to={`/product/${"shirt"}`}>
        <div className="featured__products__card__image">
          <img src={productImg} alt="product" />
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
  );
};

export default ProductCard;
