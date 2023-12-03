import "./footer.scss";
import {BsInstagram, BsFacebook, BsTwitter,BsYoutube} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import {BiLogoGmail} from 'react-icons/bi'


const Footer =() => {
    return(
        <footer className="footer">
            <div className="footer_content">
                <div className="col">
                    <div className="title">About us</div>
                    <div className="text">Fancyflus, an Indian company headquartered in New Delhi, boasts an extensive collection of premium brands. Our paramount focus is customer satisfaction, and we excel in delivering products promptly, ensuring a swift turnaround. With a wide range of brands to cater to diverse preferences, Fancyflus is your go-to destination for quality and variety. We are dedicated to providing exceptional service and efficient product delivery, making your shopping experience enjoyable and convenient.</div>
                </div>
                <div className="col">
                    <div className="title">Address</div>
                    <div className="text">FancyFlux Private Limited, Jia Sarai, Hauz Khas, New Delhi, Delhi 110016</div>
                    <div className="text">Email: support@fancyflux.in</div>
                </div>
                <div className="col">
                    <div className="title">Social</div>
                    <span className="icon"><BsFacebook/></span>
                    <span className="icon"><BsInstagram/></span>
                    <span className="icon"><BsTwitter/></span>
                    <span className="icon"><BsYoutube/></span>
                    <span className="icon"><AiFillLinkedin/></span>
                    <span className="icon"><BiLogoGmail/></span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">Customer Services</span>
                    <span className="text">Return Policy</span>
                    <span className="text">Payment</span>
                    <span className="text">FAQ</span>
                </div>
            </div>
            <div className="footer_credit">
                <div className="text">This page is developed by fancy flux 2023 all rights reserves.</div>
            </div>
        </footer>
    );
};

export default Footer;