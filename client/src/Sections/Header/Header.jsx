import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context, context } from "../../contex/contex";

import { FaCartArrowDown } from "react-icons/fa";
import { BsDisplay, BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);
  const handlescroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "stickey-header" : ""}`}>
        <div className="header-details">
          <div className="left">FancyFlux</div>
          <div className="centre">
            <BsSearch />
            <input
              type="text"
              placeholder="Search.."
              name="name"
              autocomplete="off"
              onClick={() => setShowSearch(true)}
            />
          </div>
          <div className="right">
            <div className="user_section">
              <FaUserCircle />
              <p>Sign in</p>
            </div>
            <div className="cart_section" onClick={() => setShowCart(true)}>
              <span className="cart-icon">
                <FaCartArrowDown />
                {!!cartCount && <span>{cartCount}</span>}
              </span>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
