import BreadCrumb from "../components/BreadCrumb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreateForum from "../components/Forum/CreateForum";

function CreateForumPage() {
  return (
    <>
      <Navbar />
      <BreadCrumb />
      <CreateForum />
      <Footer />
    </>
  );
}

export default CreateForumPage;
