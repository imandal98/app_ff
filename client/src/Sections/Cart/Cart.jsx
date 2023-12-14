import { useContext } from "react";
import "./Cart.scss";
import CartItems from "./Cart_items/Cart_items";
import { BsCartXFill } from "react-icons/bs";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Context } from "../../contex/contex";

import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../contex/api";

const Cart = ({ setShowCart }) => {
  const { cartSubtotal, cartItems } = useContext(Context);
  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PAYMENT_PUBLISHABLE_KEY
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });
      console.log(res);
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cart_pannel">
      <div className="opeac_layer"></div>
      <div className="cart_content">
        <div className="cart_header">
          <span className="heading">Shopping Cart</span>
          <span className="close" onClick={() => setShowCart(false)}>
            <IoCloseCircleSharp size={18} />
            <span className="txt">close</span>
          </span>
        </div>

        {!cartItems?.length && (
          <div className="empty_cart">
            <BsCartXFill />
            <span>No items in cart.</span>
            <button className="return_cart">RETURN TO SHOP</button>
          </div>
        )}

        {!!cartItems?.length && (
          <>
            <CartItems />
            <div className="cart_footer">
              <div className="subtotal">
                <span className="txt">Total:</span>
                <span className="txt price">&#8377;{cartSubtotal}</span>
              </div>
              <div className="checkout">
                <button className="checkout_btn" onClick={handlePayment}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
