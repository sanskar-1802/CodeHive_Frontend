import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const login = async () => {

    try {

      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.username);

      navigate("/");

    } catch (err) {

      alert(
        err.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h2>Welcome Back 👋</h2>

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

        <button onClick={login}>
          Login
        </button>

        <p
          style={{
            textAlign: "center",
            color: "#8b949e",
          }}
        >
          Don’t have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "#58a6ff" }}
          >
            Signup
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;