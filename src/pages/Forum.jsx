import "../styles/ForumPage.css";
import Layout from "../components/Layout";
import BreadCrumb from "../components/BreadCrumb";
import { forumQuestion } from "../utils/data";
import ForumCard from "../components/Forum/ForumCard";

function ForumPage() {
  return (
    <Layout>
      <BreadCrumb
        list={[
          { path: '/', name: "Beranda" },
          { path: 'forum', name: "Forum" }
        ]}
      />
      <div className="forum-section">
        <div className="forum-judul">Forum</div>
        <div className="search">
          <input className="input-search" type="search" placeholder="Cari bahasan di sini" />
          <button className="search-icon" type="submit">
            <img src="/search-img.svg" alt="" />
          </button>
          <a className="btn-forum" href="#">
            cari
          </a>
        </div>
        <div className="forum-container">
          {forumQuestion?.map((item, index) => {
            const { id, thumbnail, title, author, authorProfilePicture, postedDate } = item;
            return (
              <ForumCard
                key={index}
                id={id}
                thumbnail={thumbnail}
                author={author}
                authorProfilePicture={authorProfilePicture}
                title={title}
                postedDate={postedDate}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  );
}

export default ForumPage;
