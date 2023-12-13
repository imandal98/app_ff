import { IoCloseCircleSharp } from "react-icons/io5";
import "./../Search/Search.scss";
import item_img from "../../../images/product/mcb.png";
const Search = ({ setShowSearch }) => {
  return (
    // <div className="search-bar">
    //   <div className="form-data">
    //     {/* <input type="text" autoFocus placeholder="Search" /> */}
    //     {/* <IoCloseCircleSharp onClick={() => setShowSearch(false)} /> */}
    //   </div>
    <div className="search-result-container">
      <div className="search-result">
        <span className="close" onClick={() => setShowSearch(false)}>
          <IoCloseCircleSharp size={18} />
          <span className="txt">close</span>
        </span>
        <div className="search-result-items">
          <div className="item_img">
            <img src={item_img} alt="" />
          </div>
          <div className="item_details">
            <div className="name">Product Name</div>
            <div className="description">Product Description</div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Search;
