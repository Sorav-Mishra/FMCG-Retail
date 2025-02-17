import { useState, useEffect } from "react";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleIncreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cart.length > 0 ? (
        cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} />
            <div className="cart-item-details">
              <h3>{product.name}</h3>
              <p>Price: Rs. {product.price}</p>
              <div className="cart-item-quantity">
                <button onClick={() => handleDecreaseQuantity(product.id)}>
                  -
                </button>
                <span>{product.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(product.id)}>
                  +
                </button>
              </div>
            </div>
            <div className="cart-item-price">
              Rs. {product.price * product.quantity}
            </div>
            <button
              className="remove-item-btn"
              onClick={() => handleRemoveFromCart(product.id)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="empty-cart">Your cart is empty</p>
      )}
      <div className="cart-total">
        <h3>Total: Rs. {totalPrice}</h3>
      </div>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
