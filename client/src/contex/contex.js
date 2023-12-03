import { createContext, useState } from "react";
export const Context = createContext();

const Appcontxt = ({ children }) => {
  const [categories, setcategories] = useState();
  const [products, setProducts] = useState();
  return (
    <Context.Provider
      value={{
        categories,
        setcategories,
        products,
        setProducts,
      }}
    >
      {" "}
      {children}{" "}
    </Context.Provider>
  );
};

export default Appcontxt;
