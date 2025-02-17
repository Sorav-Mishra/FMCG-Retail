import { Link } from "react-router-dom";
import banner from "../assets/banner.webp";
import one from "../assets/1.webp";
import two from "../assets/2.webp";
import three from "../assets/3.webp";
import four from "../assets/4.webp";
import "./HeroSection.css";

const categories = [
  { img: one, text: "Snacks", path: "/snacks" },
  { img: two, text: "Dairy Products", path: "/dairyProducts" },
  { img: three, text: "Personal Care", path: "/personalCare" },
  { img: four, text: "Household", path: "/household" },
];

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Circular Images with Text */}
      <div className="image-container">
        {categories.map((category, index) => (
          <Link to={category.path} key={index} className="image-wrapper">
            <img src={category.img} alt={category.text} className="hero-img" />
            <p className="image-text">{category.text}</p>
          </Link>
        ))}
      </div>

      {/* Banner */}
      <div className="banner-section">
        <img src={banner} alt="Banner" className="banner-img" />
        <div className="banner-overlay">
          <p className="star-product">⭐ STAR PRODUCT</p>
          <button className="order-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
