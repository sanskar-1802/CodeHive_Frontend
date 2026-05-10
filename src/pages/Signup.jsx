import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignup = async () => {

    try {

      await API.post("/auth/signup", form);

      navigate("/verify", {
        state: { email: form.email },
      });

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Signup failed"
      );
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h2>Create Account 🚀</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setForm({
              ...form,
              username: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button onClick={handleSignup}>
          Signup
        </button>

        <p
          style={{
            textAlign: "center",
            color: "#8b949e",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "#58a6ff" }}
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;