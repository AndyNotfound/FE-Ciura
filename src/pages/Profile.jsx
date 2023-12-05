import Layout from "../components/Layout";
import ProfileDashboard from "../components/Profiles/ProfileDashboard";
import SideMenu from "../components/Sidemenu";
import "../styles/ProfilePage.css";

function ProfilePage() {
  return (
    <Layout>
      <div className="profile-layout">
        <SideMenu />
        <ProfileDashboard />
      </div>
    </Layout>
  );
}

export default ProfilePage;
