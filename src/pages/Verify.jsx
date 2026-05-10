import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

function Verify() {

  const { state } = useLocation();

  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const verify = async () => {

    try {

      await API.post("/auth/verify", {
        email: state.email,
        otp,
      });

      navigate("/login");

    } catch {

      alert("Invalid OTP");
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h2>Verify OTP 🔐</h2>

        <input
          type="text"
          placeholder="Enter OTP"
          onChange={(e) => setOtp(e.target.value)}
        />

        <button onClick={verify}>
          Verify Account
        </button>

      </div>

    </div>
  );
}

export default Verify;