import { Link } from "react-router-dom";

function Home() {
  const boxStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "25px",
    borderRadius: "15px",
    marginBottom: "25px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    transition: "0.3s",
    cursor: "pointer"
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
  };

  return (
    <div style={{ 
      padding: "40px",
      background: "linear-gradient(to right, #1a237e, #3949ab)",
      minHeight: "100vh",
      color: "white"
    }}>

      {/* Title */}
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        ⚖️ Welcome to LegalPro
      </h1>

      {/* Image */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <img 
          src="/lpgimg.jpg"
          alt="legal"
          style={{ 
            width: "180px", 
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
          }}
        />
      </div>

      {/* Intro */}
      <div 
        style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>🌟 Your Legal Companion</h2>
        <p>
          Get trusted legal advice and manage your legal needs easily with LegalPro.
        </p>
      </div>

      {/* Buttons */}
      <div 
        style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>🚀 Get Started</h2>

        <Link to="/login">
          <button style={{
            padding: "10px 20px",
            marginRight: "10px",
            background: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            Login
          </button>
        </Link>

        <Link to="/about">
          <button style={{
            padding: "10px 20px",
            background: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            Learn More
          </button>
        </Link>
      </div>

      {/* Services */}
      <div 
        style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>💼 Our Services</h2>

        <div style={{ 
          display: "flex", 
          justifyContent: "space-around", 
          flexWrap: "wrap",
          gap: "20px"
        }}>
          
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png" width="60" />
            <p>Criminal Law</p>
          </div>

          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/2910/2910791.png" width="60" />
            <p>Civil Cases</p>
          </div>

          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" width="60" />
            <p>Documentation</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;