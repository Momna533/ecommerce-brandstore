import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import bag1 from "../assets/product-bag1-300x300.jpg";
import bag2 from "../assets/product-bag3-300x300.jpg";
import productMJeans3 from "../assets/product-m-jeans3-300x300.jpg";
import productMJeans4 from "../assets/product-m-jeans4-300x300.jpg";
import productWJeans2 from "../assets/product-w-jeans2-300x300.jpg";
import jeans3 from "../assets/product-w-jeans1-300x300.jpg";
import productWJeans1 from "../assets/product-m-jeans1-300x300.jpg";
import accessory1 from "../assets/product-accessory1-300x300.jpg";
import productAccessory3 from "../assets/product-accessory3-300x300.jpg";
import productAccessory2 from "../assets/product-accessory2-300x300.jpg";
import productWJeans4 from "../assets/product-w-jeans4-300x300.jpg";
import productHoodie3 from "../assets/product-hoodie3-300x300.jpg";
import productHoodie1 from "../assets/product-hoodie1-300x300.jpg";
import productHoodie2 from "../assets/product-hoodie1-300x300.jpg";
import productHoodie4 from "../assets/product-hoodie4.jpg-300x300.jpg";
import productBag2 from "../assets/product-bag2-300x300.jpg";
import productBag3 from "../assets/product-bag3-300x300.jpg";
import productBag4 from "../assets/product-bag4-300x300.jpg";
import tshirt4 from "../assets/tshirt4-300x300.jpg";
import tshirt1 from "../assets/tshirt1-300x300.jpg";
import tshirt2 from "../assets/tshirt2-300x300.jpg";
import tshirt3 from "../assets/tshirt3-300x300.jpg";
import tshirt7 from "../assets/tshirt7-300x300.jpg";
import productMjeans2 from "../assets/product-m-jeans2-300x300.jpg";
import sportsShoe1 from "../assets/sports-shoe1-300x300.jpg";
import sportsShoe2 from "../assets/sports-shoe2-600x600.jpg";
import sportsShoe3 from "../assets/sports-shoe3-300x300.jpg";
import sportsShoe4 from "../assets/sports-shoe4-600x600.jpg";
import sportsShoe5 from "../assets/sports-shoe5-600x600.jpg";

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
    img: productWJeans4,
    title: "Dark brown jeans",
    price: "$150.00",
    category: "men",
    featured: true,
  },
  {
    id: 4,
    img: productWJeans2,
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
    img: productWJeans1,
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
    img: productAccessory2,
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
    img: productBag3,
    title: "Bright red bag",
    price: "$100.00-$140.00",
    category: "accessories",
    featured: true,
  },
  {
    id: 11,
    img: productAccessory2,
    title: "Anchor Bracelet",
    price: "$100.00-$140.00",
    category: "accessories",
    featured: false,
  },
  {
    id: 12,
    img: productWJeans4,
    title: "Basic grey jeans",
    price: "$100.00-$140.00",
    category: "women",
    featured: true,
  },
  {
    id: 13,
    img: productHoodie1,
    title: "Black Hoodie",
    price: "$100.00-$140.00",
    category: "men",
    featured: false,
  },
  {
    id: 14,
    img: productBag2,
    title: "Black over-the-shoulder handbag",
    price: "$100.00-$140.00",
    category: "accessories",
    featured: false,
  },
  {
    id: 15,
    img: productHoodie2,
    title: "Blue Hoodie",
    price: "$100.00-$140.00",
    category: "men",
    featured: false,
  },
  {
    id: 16,
    img: tshirt4,
    title: "DNK Blue TShirt",
    price: "$40.00",
    category: "men",
    featured: false,
  },
  {
    id: 17,
    img: productBag4,
    title: "Bright gold purse with chain",
    price: "$150.00",
    category: "accessories",
    featured: false,
  },
  {
    id: 18,
    img: productAccessory3,
    title: "Buddha Bracelet",
    price: "$150.00",
    category: "accessories",
    featured: false,
  },
  {
    id: 19,
    img: productMjeans2,
    title: "Dark blue denim jeans",
    price: "$150.00",
    category: "men",
    featured: false,
  },
  {
    id: 20,
    img: productMJeans4,
    title: "Dark grey jeans",
    price: "$150.00",
    category: "men",
    featured: false,
  },
  {
    id: 21,
    img: sportsShoe1,
    title: "dnk black shoes",
    price: "$200.00-$240.00",
    category: "women",
    featured: true,
  },
  {
    id: 22,
    img: sportsShoe2,
    title: "dnk blue shoes",
    price: "$200.00-$240.00",
    category: "men",
    featured: false,
  },
  {
    id: 23,
    img: sportsShoe3,
    title: "dnk green shoes",
    price: "$200.00-$240.00",
    category: "women",
    featured: false,
  },
  {
    id: 24,
    img: sportsShoe4,
    title: "dnk red shoes",
    price: "$200.00-$240.00",
    category: "men",
    featured: false,
  },
  {
    id: 25,
    img: sportsShoe5,
    title: "dnk yellow shoes",
    price: "$200.00-$240.00",
    category: "men",
    featured: false,
  },
  {
    id: 26,
    img: tshirt1,
    title: "DNK Green TShirt",
    price: "$40.00",
    category: "men",
    featured: false,
  },
  {
    id: 27,
    img: tshirt2,
    title: "Flammingo tshirt",
    price: "$40.00",
    category: "women",
    featured: false,
  },
  {
    id: 28,
    img: tshirt3,
    title: "Grey Pattern tshirt",
    price: "$40.00",
    category: "women",
    featured: false,
  },
  {
    id: 29,
    img: productMJeans3,
    title: "Faint washed Blue denim jeans",
    price: "$150.00",
    category: "women",
    featured: false,
  },
  {
    id: 30,
    img: productHoodie3,
    title: "Green Hoodie",
    price: "$100.00-$140.00",
    category: "women",
    featured: false,
  },
  {
    id: 31,
    img: productHoodie4,
    title: "Red Hoodie",
    price: "$100.00-$140.00",
    category: "men",
    featured: false,
  },
  {
    id: 32,
    img: tshirt7,
    title: "lemon tshirt",
    price: "$100.00-$140.00",
    category: "women",
    featured: false,
  },
  {
    id: 33,
    img: tshirt7,
    title: "light brown purse",
    price: "$100.00-$140.00",
    category: "accessories",
    featured: false,
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
  const [cart, setCart] = useState([]);
  const [productAmount, setProductAmount] = useState(1);

  const addToCart = (id) => {
    const product = products.find((product) => product.id === id);
    // const inCart = cart.find((item) => product.id === item.id);
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

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
        productAmount,
        setProductAmount,
        cart,
        setCart,
        addToCart,
        removeFromCart,
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
