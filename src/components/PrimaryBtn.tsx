import { Link } from "react-router-dom";

const PrimaryBtn = ({ title, varient, to, onClick }) => {
  if (varient === "link") {
    return (
      <Link
        className="primary__btn primary__btn__link"
        to={to}
        onClick={onClick}
      >
        {title}
      </Link>
    );
  }
  return (
    <button className="primary__btn" onClick={onClick}>
      {title}
    </button>
  );
};

export default PrimaryBtn;
