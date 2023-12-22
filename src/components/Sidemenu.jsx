import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight, FaBookOpen, FaComments, FaQuestionCircle, FaUser } from "react-icons/fa";
import { LoginContext } from "../contexts/LoginContext";
import { useContext } from "react";

function SideMenu() {
  const { setAccessToken } = useContext(LoginContext)
  const navigate = useNavigate();
  const onLogoutHandler = () => {
    setAccessToken(null)
    navigate('/');
  };
  return (
    <div className="menu-section">
      <div className=" menu-user">
        <img className="img-menu-user" src="/profil-img.svg" alt="inactive" />
        <p>Novalinda Putri</p>
      </div>
      <ul className="menu-item">
        <li>
          <NavLink to={`/profiles/novalindaputri`} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "inactive")}>
            <FaUser className="fa-brands" />
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink to={`/profiles/articles`} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "inactive")}>
            <FaBookOpen className="fa-brands" />
            Artikel
          </NavLink>
        </li>
        <li>
          <NavLink to={`/profiles/forums`} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "inactive")}>
            <FaComments className="fa-brands" />
            Forum
          </NavLink>
        </li>
        <li>
          <NavLink to={`/profiles/help`} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "inactive")}>
            <FaQuestionCircle className="fa-brands" />
            Bantuan
          </NavLink>
        </li>
        <li>
          <button onClick={onLogoutHandler} className="sidemenu-logout">
            <FaArrowRight className="fa-brands" />
            Keluar
          </button>
        </li>
      </ul>
    </div>
  );
}
export default SideMenu;
