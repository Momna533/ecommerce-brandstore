import { FaCartShopping } from "react-icons/fa6";
import shirt from "../assets/sports-shoe1-300x300.jpg";
import PrimaryBtn from "../components/PrimaryBtn";
const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__content">
        <h1>Cart</h1>
        <div className="cart__items">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="cart__item">
                <td>
                  <button>cross</button>
                </td>
                <td>
                  <h3>Denim jeasn</h3>
                </td>
                <td>
                  <p>$100</p>
                </td>
                <td>
                  <input type="number" placeholder="1" />
                </td>
                <td>
                  <p>$100</p>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          {/* <div className="cart__item">
            <div className="cart__item__image">
              <img src={shirt} alt="shirt" />
            </div>
            <div className="cart__item__info">
              <h4>Product Name</h4>
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
          </div> */}
        </div>
        <div className="cart__collatoral">
          <div className="cart__collatoral__content">
            <h3>Cart Totals</h3>
            <div className="cart__collatoral__subtotal">
              <p>Subtotal</p>
              <p>$100</p>
            </div>
            <div className="cart__collatoral__total">
              <p>Total</p>
              <p>$100</p>
            </div>
            <PrimaryBtn title="checkout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
