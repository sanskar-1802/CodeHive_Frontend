import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbar">

      <div className="navbar-left">

        <h1 className="logo">
          ⚡ CodeHive
        </h1>

      </div>

      <div className="navbar-right">

        {!token ? (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>

            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </>
        ) : (
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

      </div>

    </div>
  );
}

export default Navbar;