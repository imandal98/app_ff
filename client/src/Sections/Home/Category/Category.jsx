import { useNavigate } from "react-router-dom";

import "./Category.scss";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop_category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <div className="category_image">
              <img
                src={
                  process.env.REACT_APP_URL +
                  item.attributes.category_img.data.attributes.url
                }
                alt=""
              />
            </div>
            <div className="category_title">
              <span>{item.attributes.category_title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
