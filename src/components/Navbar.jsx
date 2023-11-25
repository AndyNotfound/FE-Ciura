import { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  // MOCKING USER LOGGED IN STATE
  const [login, setLogin] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="logo">
          CIURA
        </Link>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink to="/application" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              Application
            </NavLink>
          </li>
          <li>
            <NavLink to="/nutrition" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              Nutrition
            </NavLink>
          </li>
          <li>
            <NavLink to="/forum" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              Forum
            </NavLink>
          </li>
        </ul>
        <div className="button-navbar">
          {login ? (
            <img src="/profil-img.svg" alt="" />
          ) : (
            <>
              <button className="btn-navbar" onClick={() => navigate("/login")}>
                Masuk
              </button>
              <button className="btn-navbar" onClick={() => navigate("/")}>
                Daftar
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
