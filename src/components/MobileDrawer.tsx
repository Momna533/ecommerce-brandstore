import { CgClose } from "react-icons/cg";
import { FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const MobileDrawer = () => {
  const { mobileDrawerOpen, setMobileDrawerOpen } = useGlobalContext();
  return (
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
  );
};

export default MobileDrawer;
