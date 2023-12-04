import BreadCrumb from "../components/BreadCrumb";
import Layout from "../components/Layout";
import "../styles/CreateForumPage.css";
import NewForumForm from "../components/ForumNew/NewForumForm";

function CreateForumPage() {
  return (
    <Layout>
      <BreadCrumb
        list={[
          { path: "/", name: "Beranda" },
          { path: "/forum/new", name: "Forum" },
        ]}
      />
      <NewForumForm />
    </Layout>
  );
}

export default CreateForumPage;
