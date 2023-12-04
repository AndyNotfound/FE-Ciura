import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="conntainer-ftr">
        <div className="row">
          <div className="footer-col">
            <ul>
              <li>
                <Link to="/application">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <li>
                <p>Hubungi Kami</p>
              </li>
              <li>
                <p>0812-3456-78</p>
              </li>
              <li>
                <p>ciura@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Media Sosial Kami</h4>
            <ul className="medsos">
              <li>
                <a href="#">
                  <FaFacebook className="fa-brands" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram className="fa-brands" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWhatsapp className="fa-brands" />
                </a>
              </li>
            </ul>
          </div>
          <div className="row2"></div>
          <div className="footer-col2">
            <h4 className="dwnld">Download App</h4>
            <ul>
              <li>
                <div className="download gp">
                  <IoLogoGooglePlaystore className="fa-brands" />
                  <span className="p1">GET IT ON</span>
                  <span className="p2">Google Play</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "18px", textAlign: "center", color: "#ffffff", fontWeight: "500" }} className="copyright">
        Copyright 2023 © Ciura. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
