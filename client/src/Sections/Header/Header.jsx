import {useState,useContext,useEffect} from "react";
import {useNavigate} from "react-router-dom";

import Search from "./Search/Search";
import Cart from "../Cart/Cart"
import { context } from "../../contex/contex";

import { FaCartArrowDown } from 'react-icons/fa';
import { BsDisplay, BsSearch} from 'react-icons/bs';
import { FaUserCircle} from 'react-icons/fa';
import "./header.scss";

const Header =() => {
    const [scrolled, setScrolled]= useState (false);
    const [showCart, setShowCart]= useState (false);
    const handlescroll =() => {
        const offset = window.scrollY;
        if (offset>100){
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handlescroll);
    },[]);

    return (
        <>
            <header className={`header ${scrolled ? "stickey-header": ""}`}>
                <div className="header-details">
                    <div className="left">FancyFlux</div>
                    <div className="right">
                        <form>
                            <input type="text" placeholder="&#61442; Search.." name="name" />
                        </form>
                        <div className="search_section">
                            <BsSearch/> 
                        </div>
                        <div className="user_section">
                        <FaUserCircle/>
                        <p>Sign in</p>
                        </div>
                        <div className="cart_section">
                            <span className="cart-icon" onClick={() => setShowCart(true)}>
                                <FaCartArrowDown/>
                                <span>54</span>
                            </span>
                            <p>Cart</p>
                        </div>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart}/>}
        </>
    );
};

export default Header;