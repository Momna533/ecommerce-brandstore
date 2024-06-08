import { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo1-free-img.png";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import MobileHeader from "./MobileHeader";
import { useGlobalContext } from "../context/Context";

const HomeHeader: FC = () => {
  const { cartDrawerOpen, setCartDrawerOpen } = useGlobalContext();

  return (
    <>
      <div className="home__header">
        <div className="home__header__content">
          <div className="home__desktop__header">
            <div className="home__header__primary__section">
              <Link className="logo" to="/">
                <img src={logo} alt="logo" />
              </Link>
              <div className="home__nav__links">
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
            <div className="home__header__primary__section">
              <div className="home__nav__menu">
                <NavLink className="nav__link" to="/about">
                  About
                </NavLink>
                <NavLink className="nav__link" to="/contact">
                  Contact Us
                </NavLink>
              </div>
              <button
                className="nav__link home__cart__link"
                onClick={() => setCartDrawerOpen(true)}
              >
                <div className="cart__amount">$0.00</div>
                <FaCartShopping />
              </button>
              <NavLink className="nav__link home__user__link" to="/">
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

export default HomeHeader;
