import React from "react";
import ProductCard from "../components/ProductCard";

function Products({ addToCart }) {
  const products = [
    { id: 1, name: "Laptop", price: 60000, image:"laptop.webp" },
    { id: 2, name: "Headphones", price: 1000, image:"headphones.jpg" },
    { id: 3, name: "Phone", price: 40000, image:"phone.jpg"},
    { id: 4, name: "Keyboard", price: 500, image:"keyboard.webp" },
    { id: 5, name: "Smartwatch", price: 5000, image:"smartwatch.webp" },
    { id: 6, name: "Tablet", price: 20000, image:"tablet.jpeg"},
    { id: 7, name: "Camera", price: 15000 , image:"camera.webp"},
    { id: 8, name: "Bluetooth Speaker", price: 4000, image:"bluetoothspeaker.jpg" },
    { id: 9, name: "Monitor", price: 12000, image:"monitor.jpg" },
    { id: 10, name: "Gaming Console", price: 45000, image:"gamingconsole.jpg" },
  ];

  return (
    <div className="page">
      <h2>All Products</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;
