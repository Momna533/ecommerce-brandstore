import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useGlobalContext } from "../context/Context";

const FeaturedProduct = ({ id, img, title, price, category }) => {
  const { addToCart } = useGlobalContext();
  return (
    <div className="featured__products__card">
      <Link to={`/product/${title}`}>
        <div className="featured__products__card__image">
          <img src={img} alt="product" />
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
          <button
            className="featured__products__card__content__cart__btn"
            onClick={() => addToCart(id)}
          >
            <FaCartShopping />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
