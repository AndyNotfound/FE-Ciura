import BreadCrumb from "../components/BreadCrumb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Application from "../components/Application/Application";

function ApplicationPage() {
  return (
    <>
      <Navbar />
      <BreadCrumb />
      <Application />
      <Footer />
    </>
  );
}

export default ApplicationPage;
