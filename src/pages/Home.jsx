import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection from '../components/Home/Hero'
import AnemiaDescSection from "../components/Home/AnemiaDesc";
import OurServicesSection from "../components/Home/OurServices";
import AboutUsSection from "../components/Home/AboutUs";
import ArticleSection from "../components/Home/Article";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AnemiaDescSection />
      <OurServicesSection />
      <AboutUsSection />
      <ArticleSection />
      <Footer />
    </>
  );
}

export default HomePage;
