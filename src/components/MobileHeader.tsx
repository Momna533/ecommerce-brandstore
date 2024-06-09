import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo@2x-free-img.png";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useGlobalContext } from "../context/Context";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const { mobileDrawerOpen, setMobileDrawerOpen, setCartDrawerOpen } =
    useGlobalContext();
  return (
    <>
      <div className="mobile__header">
        <div className="mobile__header__content">
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="mobile__header__primary__section">
            <button
              className="mobile__header__nav__link cart__link"
              onClick={() => setCartDrawerOpen(true)}
            >
              <div className="cart__amount">$0.00</div>
              <FaCartShopping />
            </button>
            <button
              className="menu__btn"
              onClick={() => setMobileDrawerOpen(true)}
            >
              <FaHamburger />
            </button>
          </div>
        </div>
      </div>
      <MobileDrawer />
    </>
  );
};

export default Header;
