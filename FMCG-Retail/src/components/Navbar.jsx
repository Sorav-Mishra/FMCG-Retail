import { useState } from "react";
import {
  FaSearch,
  FaMicrophone,
  FaGift,
  FaShoppingCart,
  FaUser,
  FaStore,
  FaShoppingBag,
} from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(1); // Initial cart count

  // Example function to increase cart count
  const increaseCartCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="navbar">
        <Link to="/"></Link>{" "}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="search-bar">
          <FaSearch className="icon" />
          <input type="text" placeholder="Search by Products" />
          <FaMicrophone className="icon" />
        </div>
        <div className="icons">
          <FaGift className="icon" />
          <Link to="/cart">
            <div className="cart-icon" onClick={increaseCartCount}>
              <FaShoppingCart className="icon" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
          </Link>
        </div>
      </nav>

      {/* Categories
      <div className="categories">
        <div className="category-item">Beverages</div>
        <div className="category-item">Snacks</div>
        <div className="category-item">Dairy Products</div>
        <div className="category-item">Personal Care</div>
        <div className="category-item">Household Essentials</div>
      </div> */}

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <Link to="/">
          <div className="nav-item">
            <FaShoppingBag />
            <span className="nav-item1">Buy</span>
          </div>
        </Link>
        <Link to="/store">
          {" "}
          <div className="nav-item">
            <FaStore />
            <span>My Store</span>
          </div>
        </Link>
        <Link to="/account">
          {" "}
          <div className="nav-item">
            <FaUser />
            <span>Account</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
