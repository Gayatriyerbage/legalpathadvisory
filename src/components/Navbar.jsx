import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ padding: "10px", background: "#222", color: "white" }}>
      <span style={{ marginRight: "20px" }}>⚖️ LegalPro</span>

      <Link to="/" style={{ marginRight: "10px", color: "white" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "10px", color: "white" }}>About</Link>
      <Link to="/contact" style={{ marginRight: "10px", color: "white" }}>Contact</Link>

      {user ? (
        <>
          <Link to="/dashboard" style={{ marginRight: "10px", color: "white" }}>Dashboard</Link>
          <Link to="/profile" style={{ marginRight: "10px", color: "white" }}>Profile</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login" style={{ color: "white" }}>Login</Link>
      )}
    </nav>
  );
}

export default Navbar;