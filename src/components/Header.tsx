import { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo@2x-free-img.png";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import MobileHeader from "../components/MobileHeader";

const Header: FC = () => {
  return (
    <>
      <div className="header">
        <div className="header__content">
          <div className="desktop__header">
            <div className="header__primary__section">
              <Link className="logo" to="/">
                <img src={logo} alt="logo" />
              </Link>
              <div className="nav__links">
                <NavLink className="nav__link" to="/store">
                  Everything
                </NavLink>
                <NavLink className="nav__link" to="/product-category/women">
                  Women
                </NavLink>
                <NavLink className="nav__link" to="/product-category/men">
                  Men
                </NavLink>
                <NavLink
                  className="nav__link"
                  to="/product-category/accessories"
                >
                  Accessories
                </NavLink>
              </div>
            </div>
            <div className="header__primary__section">
              <div className="nav__menu">
                <NavLink className="nav__link" to="/about">
                  About
                </NavLink>
                <NavLink className="nav__link" to="/contact">
                  Contact Us
                </NavLink>
              </div>
              <button className="nav__link cart__link">
                <div className="cart__amount">$0.00</div>
                <FaCartShopping />
              </button>
              <NavLink className="nav__link user__link" to="cart">
                <FaUser />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <MobileHeader />
    </>
  );
};

export default Header;
