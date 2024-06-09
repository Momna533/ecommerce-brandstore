import { FC } from "react";
import PrimaryBtn from "./PrimaryBtn";
import { useGlobalContext } from "../context/Context";
import { CgClose } from "react-icons/cg";

const CartDrawer: FC = () => {
  const {
    cartDrawerOpen,
    setCartDrawerOpen,
    productAmount,
    cart,
    removeFromCart,
  } = useGlobalContext();
  return (
    <div className={`cart__drawer__overlay ${cartDrawerOpen ? "active" : ""}`}>
      <div className={`cart__drawer ${cartDrawerOpen ? "active" : ""}`}>
        <div className="cart__drawer__header">
          <h3>Shopping cart</h3>
          <button onClick={() => setCartDrawerOpen(false)}>
            <CgClose />
          </button>
        </div>
        <div className="divider"></div>
        <div className="cart__drawer__content">
          {cart.length > 0 ? (
            cart.map((item) => {
              const { id, title, img, price } = item;
              return (
                <div className="cart__drawer__content__entry">
                  <div className="cart__drawer__content__entry__left">
                    <div className="cart__drawer__content__entry__img">
                      <img src={img} alt={title} />
                    </div>
                    <div className="cart__drawer__content__entry__info">
                      <h4>{title}</h4>
                      <span>
                        <div className="amount">{productAmount}</div>*
                        <div className="price">{price}</div>
                      </span>
                    </div>
                  </div>
                  <div className="cart__drawer__content__entry__right">
                    <button onClick={() => removeFromCart(id)}>
                      <CgClose />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <h2>Nothing in cart yet</h2>
            </>
          )}
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
