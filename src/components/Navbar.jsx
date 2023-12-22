import { NavLink, useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

function Navbar() {
  const { isLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="logo">
          Ciura
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
          {isLoggedIn ? (
            <Link to={"/profiles/novalindaputri"}>
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
