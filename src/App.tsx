import { FC } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ProductCategory from "./pages/ProductCategory";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
import Women from "./pages/Women";
import Men from "./pages/Men";

const AppLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
const RoutesLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<RoutesLayout />}>
          <Route path="/store" element={<Store />} />
          <Route path="/product-category/women" element={<Women />} />
          <Route path="/product-category/men" element={<Men />} />
          <Route
            path="/product-category/accessories"
            element={<ProductCategory />}
          />
          <Route path="/product/:slug" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
