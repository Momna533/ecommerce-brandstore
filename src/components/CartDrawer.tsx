import { FC } from "react";
import PrimaryBtn from "./PrimaryBtn";
import { useGlobalContext } from "../context/Context";
import avatarImg from "../assets/product-accessory1-300x300.jpg";

const CartDrawer: FC = () => {
  const { cartDrawerOpen, setCartDrawerOpen } = useGlobalContext();
  return (
    <div className={`cart__drawer__overlay ${cartDrawerOpen ? "active" : ""}`}>
      <div className={`cart__drawer ${cartDrawerOpen ? "active" : ""}`}>
        <div className="cart__drawer__header">
          <h3>Shopping cart</h3>
          <button onClick={() => setCartDrawerOpen(false)}>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <div className="divider"></div>
        <div className="cart__drawer__content">
          <div className="cart__drawer__content__entry">
            <div className="cart__drawer__content__entry__left">
              <div className="cart__drawer__content__entry__img">
                <img src={avatarImg} alt="shoe" />
              </div>
              <div className="cart__drawer__content__entry__info">
                <h4>shoes</h4>
                <span>
                  <div className="amount">1</div>*
                  <div className="price">$100</div>
                </span>
              </div>
            </div>
            <div className="cart__drawer__content__entry__right">
              <button>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="cart__drawer__footer">
          <div className="divider"></div>
          <div className="cart__drawer__subtotal">
            <h3>Subtotal</h3>
            <p>$150.00</p>
          </div>
          <div className="divider"></div>
          <div className="cart__drawer__btns">
            <PrimaryBtn
              title="view cart"
              varient="link"
              to="/cart"
              onClick={() => setCartDrawerOpen(false)}
            />
            <PrimaryBtn
              title="checkout"
              onClick={() => setCartDrawerOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
