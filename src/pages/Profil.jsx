import Layout from "../components/Layout";
import "../styles/ProfilPage.css";
import SideMenu from "../components/Sidemenu";
import SideMenuProfile from "../components/SidemenuProfile";
import ProfileArtikel from "../components/ProfileArtikel";
import ProfileForum from "../components/ProfileForum";

function ProfilePage() {
  return (
    <Layout>
      <div className="profilpage-section">
        <SideMenu />
        <ProfileForum />
      </div>
    </Layout>
  );
}

export default ProfilePage;
