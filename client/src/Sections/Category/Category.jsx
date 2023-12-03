import { useParams } from "react-router-dom";
import "./Category.scss";
import Products from "../Products/Products";

import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../contex/api";

const Category = () => {
  const [data, setData] = useState();

  const makeApiCall = () => {
    fetchDataFromApi(
      `/api/product-lists?populate=*&[filters][categories][id]=${id}`
    ).then((res) => {
      console.log(res);
      setData(res);
    });
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  const { id } = useParams();

  return (
    <div className="category-main">
      <div className="layout">
        <div className="title">
          {
            data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
              ?.category_title
          }
        </div>
        <Products innerPage={true} products={data} />
      </div>
    </div>
  );
};

export default Category;
