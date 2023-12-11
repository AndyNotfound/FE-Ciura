import "../styles/ForumListPage.css";
import Layout from "../components/Layout";
import BreadCrumb from "../components/BreadCrumb";
import ForumCard from "../components/Forum/ForumCard";
import { forumArray } from "../utils/data";
// import useAsync from "../helpers/hooks/useAsync";
// import fetchData from "../helpers/fetch";
// import { useEffect } from "react";

function ForumListPage() {
  // const { data, run, isLoading, isSuccess } = useAsync({
  //   data: { username: "Hello" },
  // });

  // useEffect(() => {
  //   run(
  //     fetchData({ url: "/api/forums" }),
  //   );
  // }, [run]);

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
          {/* {
            isLoading ?
              <h1>Loading</h1>
              : isSuccess ?
                <>
                  {data.forums?.map((item, index) => {
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
                </>
                :
                ""
          } */}
          {forumArray?.map((item, index) => {
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

export default ForumListPage;
