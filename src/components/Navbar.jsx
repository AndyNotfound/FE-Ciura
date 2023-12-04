import { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  // MOCKING USER LOGGED IN STATE
  const [login, setLogin] = useState(true);
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="logo">
          CIURA
        </Link>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              Artikel
            </NavLink>
          </li>
          <li>
            <NavLink to="/application" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              Aplikasi
            </NavLink>
          </li>
          <li>
            <NavLink to="/nutrition" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              Nutrisi
            </NavLink>
          </li>
          <li>
            <NavLink to="/forums" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              Forum
            </NavLink>
          </li>
        </ul>
        <div className="button-navbar">
          {login ? (
            <Link to={"/profiles/test"}>
              <img src="/profil-img.svg" alt="" />
            </Link>
          ) : (
            <>
              <button className="btn-navbar" onClick={() => navigate("/login")}>
                Masuk
              </button>
              <button className="btn-navbar" onClick={() => navigate("/signup")}>
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
