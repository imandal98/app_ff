import "./Banner.scss";

import banner_img from "../../images/bag.png";

const Banner =() => {
    return (
        <div className="main_banner">
            <div className="contain">
                <img src={banner_img} alt="" />
            </div>
        </div>

    );
};

export default Banner;