import { FC } from "react";
import { Link } from "react-router-dom";
import productImg from "../assets/product-accessory2.jpg";
import { FaCartShopping } from "react-icons/fa6";
const ProductCard: FC = ({ title, img, category, price }) => {
  return (
    <div className="products__card">
      <Link to={`/product/${title}`}>
        <div className="featured__products__card__image">
          <img src={img} alt={title} />
        </div>
      </Link>
      <div className="featured__products__card__content">
        <Link to={`/product/${title}`}>
          <h4>{title}</h4>
        </Link>
        <p>{category}</p>
        <p>{price}</p>
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
