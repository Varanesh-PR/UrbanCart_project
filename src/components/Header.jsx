import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="logo">Urban Cart</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}

export default Header;
