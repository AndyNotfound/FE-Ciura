import { NavLink, useParams } from "react-router-dom";
import { FaArrowRight, FaBookOpen, FaComments, FaQuestionCircle, FaUser } from "react-icons/fa";

function SideMenu() {
  const { username } = useParams();
  return (
    <div className="menu-section">
      <div className=" menu-user">
        <img className="img-menu-user" src="/profil-img.svg" alt="inactive" />
        <p>{username}</p>
      </div>
      <ul className="menu-item">
        <li>
          <NavLink
            to={`/profiles/${username}`}
            className={
              ({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "inactive")
            }
          >
            <FaUser className="fa-brands" />
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/profiles/${username}/articles`}

            className={
              ({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "inactive")
            }
          >
            <FaBookOpen className="fa-brands" />
            Artikel
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/profiles/${username}/forums`}
            className={
              ({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "inactive")
            }
          >
            <FaComments className="fa-brands" />
            Forum
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/profiles/help`}
            className={
              ({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "inactive")
            }
          >
            <FaQuestionCircle className="fa-brands" />
            Bantuan
          </NavLink>
        </li>
        <li>
          <button className="sidemenu-logout">
            <FaArrowRight className="fa-brands" />
            Keluar
          </button>
        </li>
      </ul>
    </div>
  );
}
export default SideMenu;
