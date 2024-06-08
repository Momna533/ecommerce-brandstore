import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo@2x-free-img.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import PrimaryBtn from "./PrimaryBtn";

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="above__footer">
          <Link to="/">
            <h2>
              SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
            </h2>
          </Link>
        </div>
        <div className="primary__footer">
          <div className="primary__footer__column">
            <img src={logo} alt="logo" width={90} height={30} />
            <h4>The best look anytime anywhere.</h4>
          </div>
          <div className="primary__footer__column">
            <div className="primary__footer__column__heading">For her</div>
            <Link to="/">Women jeans</Link>
            <Link to="/">Women jeans</Link>
            <Link to="/">Women jeans</Link>
            <Link to="/">Women jeans</Link>
            <Link to="/">Women jeans</Link>
          </div>
          <div className="primary__footer__column">
            <div className="primary__footer__column__heading">For him</div>
            <Link to="/">men jeans</Link>
            <Link to="/">men jeans</Link>
            <Link to="/">men jeans</Link>
            <Link to="/">men jeans</Link>
            <Link to="/">men jeans</Link>
          </div>
          <div className="primary__footer__column">
            <div className="primary__footer__column__heading">Subscribe</div>
            <form>
              <input type="email" placeholder="Enter your email" />
              <PrimaryBtn title="Subscribe" />
            </form>
          </div>
        </div>
        <div className="below__footer">
          <p>Copyright © 2024 Brandstore. Powered by Brandstore.</p>
          <div className="footer__social__links">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
