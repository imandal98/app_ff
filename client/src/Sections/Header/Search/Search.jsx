import { IoCloseCircleSharp } from "react-icons/io5";
import "./../Search/Search.scss";
import item_img from "../../../images/product/mcb.png";
import { useNavigate } from "react-router-dom";
const Search = ({ setShowSearch, searchResult }) => {
  // console.log(searchResult.data);
  const navigate = useNavigate();
  if (searchResult !== null) {
    return (
      // <div className="search-bar">
      //   <div className="form-data">
      //     {/* <input type="text" autoFocus placeholder="Search" /> */}
      //     {/* <IoCloseCircleSharp onClick={() => setShowSearch(false)} /> */}
      //   </div>
      <div className="search-result-container">
        <div className="search-result">
          {/* <span className="close" onClick={() => setShowSearch(false)}>
            <IoCloseCircleSharp size={18} />
            <span className="txt">close</span>
          </span> */}
          {searchResult?.data?.map((item) => (
            <div
              key={item.id}
              className="search-result-items"
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
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
                <div className="description">
                  {item.attributes.descriptions}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      // </div>
    );
  }
};

export default Search;
