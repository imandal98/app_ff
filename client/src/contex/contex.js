import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const Context = createContext();

const Appcontxt = ({ children }) => {
  const [categories, setcategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const loaction = useLocation();

  useEffect(() => {}, [cartItems]);
  const handleAddToCart = (product, quantity) => {};
  const handleRemoveFromCart = (product) => {};
  const handleCartProductQuantity = (type, product) => {};

  return (
    <Context.Provider
      value={{
        categories,
        setcategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubtotal,
        setCartSubtotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {" "}
      {children}{" "}
    </Context.Provider>
  );
};

export default Appcontxt;
