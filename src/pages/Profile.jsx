import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    const storedOrders = JSON.parse(sessionStorage.getItem("orders")) || [];
    if (storedUser) setUser(storedUser);
    setOrders(storedOrders);
  }, []);

  return (
    <div className="page">
      <h2>Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>No user info available. Please sign up.</p>
      )}

      <h3>Order History</h3>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index} className="order-box">
              <strong>Order {index + 1}</strong> - {order.date} <br />
              Total: ₹{order.total}
              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>{item.name} - ₹{item.price}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Profile;


