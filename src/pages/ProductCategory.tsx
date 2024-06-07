import { FC } from "react";
import Bredcrumbs from "../components/Bredcrumbs";
import FiltersContainer from "../components/FiltersContainer";
import SearchResults from "../components/SearchResults";
import Products from "../components/Products";
import Pagination from "../components/Pagination";

const Store: FC = () => {
  return (
    <div className="container">
      <FiltersContainer />
      <main>
        <Bredcrumbs path="store" />
        <div className="row">
          <SearchResults />
          <form>
            <select name="" id="" className="filters__select">
              <option value="">default</option>
              <option value="">popularity</option>
              <option value="">default</option>
            </select>
          </form>
        </div>
        <Products />
        <Pagination />
      </main>
    </div>
  );
};

export default Store;
