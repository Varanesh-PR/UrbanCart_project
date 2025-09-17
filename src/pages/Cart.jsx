import React from "react";

function Cart({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const existingOrders = JSON.parse(sessionStorage.getItem("orders")) || [];

    const newOrder = {
      items: cart,
      total: total,
      date: new Date().toLocaleString()
    };

    const newOrders = [...existingOrders, newOrder];

    sessionStorage.setItem("orders", JSON.stringify(newOrders));

    setCart([]);

    alert("Order placed successfully!");
  };

  return (
    <div className="page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
