import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import NavbarLogin from "../components/NavbarLogin";
import Pengertian from "../components/pengertian";
import Layanankami from "../components/layanankami";
import Tentangkami from "../components/tentangkami";
import Artikel from "../components/artikel";

function HomeLogin() {
  return (
    <>
      <NavbarLogin />
      <Hero />
      <Pengertian />
      <Layanankami />
      <Tentangkami />
      <Artikel />
      <Footer />
    </>
  );
}

export default HomeLogin;
