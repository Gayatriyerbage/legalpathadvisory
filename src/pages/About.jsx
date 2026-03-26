function About() {
  const boxStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "25px",
    borderRadius: "15px",
    marginBottom: "25px",
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
        About LegalPro ⚖️
      </h1>

      {/* Who We Are */}
      <div 
        style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>🌟 Who We Are</h2>
        <p>
          LegalPro is a modern platform that provides simple and accessible 
          legal guidance for everyone.
        </p>
      </div>

      {/* Mission */}
      <div 
        style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>🎯 Our Mission</h2>
        <p>
          To empower individuals by delivering reliable and easy-to-understand 
          legal solutions through technology.
        </p>
      </div>

      {/* Services */}
      <div 
        style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>💼 What We Offer</h2>
        <ul>
          <li>Legal consultation guidance</li>
          <li>Lawyer profile management</li>
          <li>Secure authentication system</li>
          <li>Easy-to-use interface</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div 
        style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>🚀 Why Choose Us?</h2>
        <p>
          We focus on simplicity, security, and user-friendly design to help 
          users access legal help quickly and efficiently.
        </p>
      </div>

    </div>
  );
}

export default About;