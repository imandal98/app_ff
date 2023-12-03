import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../contex/api";

import "./Product_info.scss";
import Related from "./Related_product/Related_product";
import prod_img from "../../images/product/mcb.png";
import { FaCartPlus } from "react-icons/fa";

const Product_info = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState();

  const makeApiCall = () => {
    fetchDataFromApi(`/api/product-lists?populate=*&[filters][id]=${id}`).then(
      (res) => {
        console.log(res);
        setData(res);
      }
    );
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  const increase = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrease = () => {
    setQuantity((prevState) => {
      if (prevState == 1) return 1;
      return prevState - 1;
    });
  };

  if (!data) return;
  const product = data.data[0].attributes;
  console.log(product);
  return (
    <div className="product-info-main">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_URL + product.image.data.attributes.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="details">{product.descriptions}</span>

            <div className="cart-button">
              <div className="quantity-button">
                <span onClick={decrease}>-</span>
                <span>{quantity}</span>
                <span onClick={increase}>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="split" />

            <div className="info"></div>
          </div>
        </div>
        <Related productID={id} categoryID={product.categories.data[0]} />
      </div>
    </div>
  );
};

export default Product_info;
