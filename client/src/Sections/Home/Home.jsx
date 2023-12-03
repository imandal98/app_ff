import { useEffect, useContext } from "react";
import "./home.scss";
// import Banner from "../Banner/Banner";
import Categogy from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../contex/api";
import { Context } from "../../contex/contex";

const Home = () => {
  const { categories, setcategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/product-lists?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setcategories(res);
    });
  };

  return (
    <div className="home">
      <div className="main_containt">
        <div className="layout">
          <Categogy categories={categories} />
          <Products products={products} headingText="Best products" />
        </div>
      </div>
      {/* <Banner/>  */}
    </div>
  );
};

export default Home;
