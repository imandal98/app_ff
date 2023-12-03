import "./Cart_items.scss";
import { IoCloseCircleSharp } from "react-icons/io5";
import item_img from "../../../images/product/mcb.png";
import { BsCartXFill } from "react-icons/bs";
const Cart_items = () => {
  return (
    <div className="cart_items">
      <div className="cart_item">
        <div className="item_img">
          <img src={item_img} alt="" />
        </div>
        <div className="item_details">
          <div className="name">Product Name</div>
          <IoCloseCircleSharp className="close_btn" />
          <div className="quantity-button">
            <span>+</span>
            <span>01</span>
            <span>-</span>
          </div>
          <div className="txt">
            <span>1</span>
            <span>X</span>
            <span className="highlight">&#8377;1099</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart_items;
