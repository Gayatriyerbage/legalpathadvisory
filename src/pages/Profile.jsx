import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  const boxStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "25px",
    borderRadius: "15px",
    maxWidth: "400px",
    margin: "auto",
    textAlign: "center",
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
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        👤 Lawyer Profile
      </h1>

      <div style={boxStyle}>
        <h2>{user?.name}</h2>

        <p><strong>Role:</strong> {user?.role}</p>
        <p><strong>Specialization:</strong> Criminal Law</p>
        <p><strong>Experience:</strong> 5 Years</p>
        <p><strong>Location:</strong> Bangalore</p>


      </div>
    </div>
  );
}

export default Profile;