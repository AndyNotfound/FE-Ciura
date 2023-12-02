import BreadCrumb from "../components/BreadCrumb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DetailForum from "../components/Forum/DetailForum";

function DetailForumPage() {
  return (
    <>
      <Navbar />
      <BreadCrumb />
      <DetailForum />
      <Footer />
    </>
  );
}

export default DetailForumPage;
