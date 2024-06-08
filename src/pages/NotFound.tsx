import PrimaryBtn from "../components/PrimaryBtn";

const NotFound = () => {
  return (
    <div className="section">
      <div className="section__content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <PrimaryBtn title="go back home" varient="link" to="/" />
      </div>
    </div>
  );
};

export default NotFound;
