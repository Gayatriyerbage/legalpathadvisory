import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext);

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "25px",
    borderRadius: "15px",
    width: "250px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    transition: "0.3s",
    cursor: "pointer"
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
  };

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "linear-gradient(to right, #1a237e, #3949ab)",
        color: "white"
      }}
    >
      {/* Welcome */}
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Welcome, {user?.name} 👋
      </h1>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "25px"
        }}
      >
        <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2>📁 Cases</h2>
          <p style={{ fontSize: "22px", fontWeight: "bold" }}>12</p>
          <p>Active Cases</p>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2>👥 Clients</h2>
          <p style={{ fontSize: "22px", fontWeight: "bold" }}>8</p>
          <p>Registered Clients</p>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2>📅 Appointments</h2>
          <p style={{ fontSize: "22px", fontWeight: "bold" }}>5</p>
          <p>Upcoming</p>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2>💼 Services</h2>
          <p style={{ fontSize: "18px" }}>Legal Advisory</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2>⚖️ Your Role: {user?.role}</h2>
        <p style={{ marginTop: "10px" }}>
          Manage your legal activities efficiently using LegalPro
        </p>
      </div>
    </div>
  );
}

export default Dashboard;