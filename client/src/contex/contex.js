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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loaction]);

  useEffect(() => {
    let count = 0;
    cartItems.map((item) => (count += item.attributes.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItems.map(
      (item) => (subTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubtotal(subTotal);
  }, [cartItems]);
  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };
  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };
  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

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
