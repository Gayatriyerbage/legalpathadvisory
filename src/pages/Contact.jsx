function Contact() {
  const boxStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "25px",
    color: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
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
      {/* Title */}
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Contact Us 📞
      </h1>

      {/* Address */}
      <div style={boxStyle}>
        <h2>📍 Office Address</h2>
        <p>Bangalore, Karnataka, India</p>
      </div>

      {/* Email */}
      <div style={boxStyle}>
        <h2>📧 Email</h2>
        <p>legalpro@gmail.com</p>
      </div>

      {/* Phone */}
      <div style={boxStyle}>
        <h2>📱 Phone</h2>
        <p>+91 9876543210</p>
      </div>

      {/* Working Hours */}
      <div style={boxStyle}>
        <h2>⏰ Working Hours</h2>
        <p>Monday - Friday: 9 AM - 6 PM</p>
      </div>

      {/* Contact Form */}
      <div style={boxStyle}>
        <h2>📝 Send Us a Message</h2>

        <input
          type="text"
          placeholder="Your Name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "none"
          }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "none"
          }}
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "none"
          }}
        />

        <button
          style={{
            padding: "10px 20px",
            background: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;