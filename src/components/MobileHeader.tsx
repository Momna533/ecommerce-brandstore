import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo@2x-free-img.png";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useGlobalContext } from "../context/Context";

const Header = () => {
  const { mobileDrawerOpen, setMobileDrawerOpen } = useGlobalContext();
  return (
    <>
      <div className="mobile__header">
        <div className="mobile__header__content">
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="mobile__header__primary__section">
            <button className="mobile__header__nav__link cart__link">
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
      <div className={`mobile__drawer ${mobileDrawerOpen ? "active" : ""}`}>
        <button
          onClick={() => setMobileDrawerOpen(false)}
          className="close__menu__btn"
        >
          <CgClose />
        </button>
        <div className="mobile__drawer__content">
          <div className="mobile__drawer__links">
            <NavLink
              className="nav__link user__link"
              to="cart"
              onClick={() => setMobileDrawerOpen(false)}
            >
              <FaUser />
            </NavLink>
            <NavLink
              className="nav__link"
              to="/store"
              onClick={() => setMobileDrawerOpen(false)}
            >
              Everything
            </NavLink>
            <NavLink
              className="nav__link"
              to="/product-category/women"
              onClick={() => setMobileDrawerOpen(false)}
            >
              Women
            </NavLink>
            <NavLink
              className="nav__link"
              to="/product-category/men"
              onClick={() => setMobileDrawerOpen(false)}
            >
              Men
            </NavLink>
            <NavLink
              className="nav__link"
              to="/product-category/accessories"
              onClick={() => setMobileDrawerOpen(false)}
            >
              Accessories
            </NavLink>
            <NavLink
              className="nav__link"
              to="/about"
              onClick={() => setMobileDrawerOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              className="nav__link"
              to="/contact"
              onClick={() => setMobileDrawerOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
