import "../styles/ForumPage.css";
import Layout from "../components/Layout";
import BreadCrumb from "../components/BreadCrumb";
import Forum from "../components/forum";

function ForumPage() {
  return (
    <Layout>
      <BreadCrumb />
      <Forum />
    </Layout>
  );
}

export default ForumPage;
