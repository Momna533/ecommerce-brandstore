import { FC, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ProductCategory from "./pages/ProductCategory";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <>
      <Outlet />
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
          <Route path="/product-category/women" element={<ProductCategory />} />
          <Route path="/product-category/men" element={<ProductCategory />} />
          <Route
            path="/product-category/accessories"
            element={<ProductCategory />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
