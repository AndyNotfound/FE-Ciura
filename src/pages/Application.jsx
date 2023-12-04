import BreadCrumb from "../components/BreadCrumb";
import Layout from "../components/Layout";
import AppHero from "../components/Application/AppHero";
import AppFeatures from "../components/Application/AppFeatures";
import "../styles/ApplicationPage.css";

function ApplicationPage() {
  return (
    <Layout>
      <BreadCrumb
        list={[
          { path: '/', name: 'Beranda', },
          { path: '/application', name: 'Aplikasi' }
        ]}
      />
      <AppHero />
      <AppFeatures />
    </Layout>
  );
}

export default ApplicationPage;
