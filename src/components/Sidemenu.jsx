import { FaArrowRight, FaBookOpen, FaComments, FaQuestionCircle, FaUser } from "react-icons/fa";

function SideMenu() {
  return (
    <>
      <div className="menu-section">
        <div className=" menu-user">
          <img className="img-menu-user" src="/profil-img.svg" alt="" />
          <p>Novidaa98@gmail.com</p>
        </div>
        <div className="menu menu-profile">
          <FaUser className="fa-brands" />
          <a href="#">Profil</a>
        </div>
        <div className="menu menu-artikel">
          <FaBookOpen className="fa-brands" />
          <a href="#">Artikel</a>
        </div>
        <div className="menu menu-artikel">
          <FaComments className="fa-brands" />
          <a href="#">Forum</a>
        </div>
        <div className="menu menu-artikel">
          <FaQuestionCircle className="fa-brands" />
          <a href="#">Bantuan</a>
        </div>
        <div className="menu menu-artikel">
          <FaArrowRight className="fa-brands" />
          <a href="#">Keluar</a>
        </div>
      </div>
    </>
  );
}
export default SideMenu;
