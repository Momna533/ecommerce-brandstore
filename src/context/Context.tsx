import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import sportsShoe1 from "../assets/sports-shoe1-300x300.jpg";
import bag1 from "../assets/product-bag1-300x300.jpg";
import bag2 from "../assets/product-bag3-300x300.jpg";
import jeans1 from "../assets/product-w-jeans4-300x300.jpg";
import jeans2 from "../assets/product-w-jeans2-300x300.jpg";
import jeans3 from "../assets/product-w-jeans1-300x300.jpg";
import jeans4 from "../assets/product-m-jeans1-300x300.jpg";
import accessory2 from "../assets/product-accessory2.jpg";
import accessory1 from "../assets/product-accessory1-300x300.jpg";

const data = [
  {
    id: 1,
    img: sportsShoe1,
    title: "dnk yellow shoes",
    price: "$120.00",
    category: "men",
    featured: true,
  },
  {
    id: 2,
    img: sportsShoe1,
    title: "dnk blue shoes",
    price: "$200.00-$240.00",
    category: "men",
    featured: true,
  },
  {
    id: 3,
    img: jeans1,
    title: "Dark brown jeans",
    price: "$150.00",
    category: "men",
    featured: true,
  },
  {
    id: 4,
    img: jeans2,
    title: "Blue denim jeans",
    price: "$150.00",
    category: "women",
    featured: true,
  },
  {
    id: 5,
    img: jeans3,
    title: "Basic grey jeans",
    price: "$150.00",
    category: "women",
    featured: true,
  },
  {
    id: 6,
    img: jeans4,
    title: "Blue denim shorts",
    price: "$130.00",
    category: "women",
    featured: true,
  },
  {
    id: 7,
    img: accessory1,
    title: "Anchor braceet",
    price: "$150.00-$180.00",
    category: "accessories",
    featured: true,
  },
  {
    id: 8,
    img: accessory2,
    title: "boho bangle braceet",
    price: "$150.00-$170.00",
    category: "accessories",
    featured: true,
  },
  {
    id: 9,
    img: bag2,
    title: "light brown purse",
    price: "$150.00",
    category: "accessories",
    featured: true,
  },
  {
    id: 10,
    img: bag1,
    title: "Bright red bag",
    price: "$100.00-$140.00",
    category: "accessories",
    featured: true,
  },
];

interface AppContextProps {
  mobileDrawerOpen: boolean;
  setMobileDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const featuredData = data.filter((item) => item.featured === true);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState(featuredData);
  const [products, setProducts] = useState(data);

  useEffect(() => {
    const closeMobileDrawer = () => {
      if (window.innerWidth > 1024) {
        setMobileDrawerOpen(false);
      }
    };

    window.addEventListener("resize", closeMobileDrawer);
    return () => {
      window.removeEventListener("resize", closeMobileDrawer);
    };
  }, []);
  return (
    <AppContext.Provider
      value={{
        mobileDrawerOpen,
        setMobileDrawerOpen,
        cartDrawerOpen,
        setCartDrawerOpen,
        products,
        setProducts,
        featuredProducts,
        setFeaturedProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

export { useGlobalContext, AppProvider };
