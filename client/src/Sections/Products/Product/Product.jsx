import { useNavigate } from "react-router-dom";
import "./Product.scss";
const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="image">
        <img
          src={process.env.REACT_APP_URL + data.image.data.attributes.url}
          alt=""
        />
      </div>
      <div className="details">
        <span className="Name">{data.title}</span>
        <span className="Price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
