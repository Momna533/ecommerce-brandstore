import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Bredcrumbs = ({ path }) => {
  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link> <FaChevronRight /> <span>{path}</span>
    </div>
  );
};

export default Bredcrumbs;
