import { FC } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
import Women from "./pages/Women";
import Men from "./pages/Men";
import CartDrawer from "./components/CartDrawer";
import Cart from "./pages/Cart";
import HomeHeader from "./components/HomeHeader";
import NotFound from "./pages/NotFound";
import Accessories from "./pages/Accessories";

const AppLayout = () => {
  return (
    <>
      <HomeHeader />
      <CartDrawer />
      <Outlet />
      <Footer />
    </>
  );
};
const RoutesLayout = () => {
  return (
    <>
      <Header />
      <CartDrawer />
      <Outlet />
      <Footer />
    </>
  );
};
const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/" element={<RoutesLayout />}>
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-category/women" element={<Women />} />
        <Route path="/product-category/men" element={<Men />} />
        <Route path="/product-category/accessories" element={<Accessories />} />
        <Route path="/product/:slug" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
