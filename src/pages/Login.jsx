import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/dashboard");
  };

  const boxStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "30px",
    borderRadius: "12px",
    width: "300px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #1a237e, #3949ab)"
      }}
    >
      <div style={boxStyle}>
        <h2>🔐 Lawyer Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "none"
            }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "none"
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#ff9800",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          Use: lawyer@gmail.com / 1234
        </p>
      </div>
    </div>
  );
}

export default Login;