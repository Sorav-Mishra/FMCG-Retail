// import { useNavigate } from "react-router-dom";
// import "./Products.css";
// import one from "../assets/Achari Matthi.webp";
// import two from "../assets/All_Time_Mix_250g-1.webp";
// import three from "../assets/AlooLachha.webp";
// import four from "../assets/BadamLachha200g.webp";
// import five from "../assets/Bakked Del.webp";
// import six from "../assets/Besan Laddu.webp";
// import seven from "../assets/BhelpuriMix.webp";
// import eight from "../assets/Bikano All in one.webp";
// import nine from "../assets/Bikano Aloo Bhujia.webp";
// import ten from "../assets/Bikano Amritsari Papad.webp";

// const products = [
//   { id: 1, name: "Achari Matthi", price: 145, image: one },
//   { id: 2, name: "All Time Mixture", price: 55, image: two },
//   { id: 3, name: "Aloo Lachha", price: 60, image: three },
//   { id: 4, name: "Badam Lachha", price: 120, image: four },
//   { id: 5, name: "Baked Del Kaju Pista", price: 200, image: five },
//   { id: 6, name: "Besan Laddu Spl", price: 300, image: six },
//   { id: 7, name: "Bhelpuri Namkeen", price: 55, image: seven },
//   { id: 8, name: "Bikano All in One", price: 55, image: eight },
//   { id: 9, name: "Bikano Aloo Bhujia", price: 50, image: nine },
//   { id: 10, name: "Bikano Amritsari Papad", price: 80, image: ten },
// ];

// const Products = () => {
//   const navigate = useNavigate();

//   const handleAddToCart = (product) => {
//     navigate("/cart", { state: { product } });
//   };

//   return (
//     <div className="products-container">
//       <h2 className="products-title">Our Products</h2>
//       <div className="products-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="product-image"
//             />
//             <h3 className="product-name">{product.name}</h3>
//             <p className="product-price">Rs. {product.price}</p>
//             <button
//               className="add-to-cart"
//               onClick={() => handleAddToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Products.css";
import one from "../assets/Achari Matthi.webp";
import two from "../assets/All_Time_Mix_250g-1.webp";
import three from "../assets/AlooLachha.webp";
import four from "../assets/BadamLachha200g.webp";
import five from "../assets/Bakked Del.webp";
import six from "../assets/Besan Laddu.webp";
import seven from "../assets/BhelpuriMix.webp";
import eight from "../assets/Bikano All in one.webp";
import nine from "../assets/Bikano Aloo Bhujia.webp";
import ten from "../assets/Bikano Amritsari Papad.webp";

const products = [
  { id: 1, name: "Achari Matthi", price: 145, image: one },
  { id: 2, name: "All Time Mixture", price: 55, image: two },
  { id: 3, name: "Aloo Lachha", price: 60, image: three },
  { id: 4, name: "Badam Lachha", price: 120, image: four },
  { id: 5, name: "Baked Del Kaju Pista", price: 200, image: five },
  { id: 6, name: "Besan Laddu Spl", price: 300, image: six },
  { id: 7, name: "Bhelpuri Namkeen", price: 55, image: seven },
  { id: 8, name: "Bikano All in One", price: 55, image: eight },
  { id: 9, name: "Bikano Aloo Bhujia", price: 50, image: nine },
  { id: 10, name: "Bikano Amritsari Papad", price: 80, image: ten },
];

const Products = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === product.id);
      if (productIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[productIndex].quantity += 1;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="products-container">
      <h2 className="products-title">Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Rs. {product.price}</p>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button className="go-to-cart-btn" onClick={handleGoToCart}>
        Go to Cart
      </button>
    </div>
  );
};

export default Products;
