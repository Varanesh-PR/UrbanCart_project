import React from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate("/signup");
  };
  
  return (
    <div className="page">
      <h2>Welcome to Urban Cart</h2>
        <h3>Your one stop destination for all kinds of products</h3>
        <h3>Join today and enjoy hassle free and quick shopping now!</h3>
        <img className="img"src="cart.jpg"></img>
        <br></br>
        <button onClick={goToSignup}>Sign Up Now!</button>
    </div>
  );
}

export default Home;
