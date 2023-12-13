import "./Cart_items.scss";
import { IoCloseCircleSharp } from "react-icons/io5";
import item_img from "../../../images/product/mcb.png";
import { BsCartXFill } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../../contex/contex";
const Cart_items = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);
  return (
    <div className="cart_items">
      {cartItems.map((item) => (
        <div key={item.id} className="cart_item">
          <div className="item_img">
            <img
              src={
                process.env.REACT_APP_URL +
                item.attributes.image.data.attributes.url
              }
              alt=""
            />
          </div>
          <div className="item_details">
            <div className="name">{item.attributes.title}</div>
            <IoCloseCircleSharp
              className="close_btn"
              onClick={() => handleRemoveFromCart(item)}
            />
            <div className="quantity-button">
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
            </div>
            <div className="txt">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                &#8377;{item.attributes.price * item.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart_items;
