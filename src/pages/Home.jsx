import "../styles/HomePage.css";
import Layout from "../components/Layout";
import HeroSection from "../components/Home/Hero";
import AnemiaDescSection from "../components/Home/AnemiaDesc";
import OurServicesSection from "../components/Home/OurServices";
import AboutUsSection from "../components/Home/AboutUs";
import ArticleSection from "../components/Home/Article";

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <AnemiaDescSection />
      <OurServicesSection />
      <AboutUsSection />
      <ArticleSection />
    </Layout>
  );
}

export default HomePage;
