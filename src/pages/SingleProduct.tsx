import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/Context";
import PrimaryBtn from "../components/PrimaryBtn";

const SingleProduct: FC = () => {
  const { slug } = useParams();
  const { products, addToCart } = useGlobalContext();
  const singleProduct = products.find((product) => product.title === slug);
  const { id, img, title, price, category } = singleProduct;
  return (
    <div className="single__product">
      <div className="single__product__content">
        <div className="single__product__img">
          <img src={img} alt="product" />
        </div>
        <div className="single__product__info">
          <div className="breadcrumbs">
            Home/{category}/{title}
          </div>
          <Link to="/">
            <p className="category">{category}</p>
          </Link>
          <h2>{title}</h2>
          <p className="price">{price}</p>
          <div className="variations"></div>
          <div className="rating"></div>
          <div className="divider"></div>
          <div className="single__product__info__cart">
            <PrimaryBtn
              title="Add to cart"
              varient="link"
              onClick={() => addToCart(id)}
            />
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
