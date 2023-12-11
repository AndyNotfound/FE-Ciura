import BreadCrumb from "../components/BreadCrumb";
import QuestionSection from "../components/ForumDetail/QuestionSection";
import { useParams } from "react-router-dom";
import CommentSection from "../components/ForumDetail/CommentSection";
import Layout from "../components/Layout";
import "../styles/DetailForumPage.css";
import RelatedQuestionItem from "../components/ForumDetail/RelatedQuestionItem";
import { detailForum } from "../utils/data";
// import useAsync from "../helpers/hooks/useAsync";
// import fetchData from "../helpers/fetch";
// import { useEffect } from "react";

function DetailForumPage() {
  const { id, slug } = useParams();

  // const { data, run, isLoading, isSuccess } = useAsync({
  //   data: { username: "Hello" },
  // });

  // useEffect(() => {
  //   run(
  //     fetchData({ url: `/api/forums/${id}` }),
  //   );
  // }, [run, id]);

  return (
    <Layout>
      {/* {isLoading ?
        <h1>Loading</h1>
        : isSuccess ?
          <>
            <BreadCrumb
              list={[
                { path: "/", name: "Beranda" },
                { path: "/forums", name: "Forum" },
                { path: `/forums/${id}/${slug}`, name: data?.title },
              ]}
            />
            <div className="forum-section">
              <div className="forum-judul">Diskusi</div>
              <div className="forumtopik-container">
                <div className="topik-left">
                  <QuestionSection
                    title={data?.title}
                    author={data?.author}
                    authorProfilePicture={data?.authorProfilePicture}
                    postedDate={data?.postedDate}
                    question={data?.question}
                  />
                  <CommentSection comments={data?.comments} />
                </div>
                <div className="topik-right">
                  <h1 className="title-right">PERTANYAAN TERKAIT</h1>
                  {data?.relatedQuestion.map((item, index) => {
                    const { id, title, authorProfilePicture } = item;
                    return (
                      <RelatedQuestionItem
                        key={index}
                        id={id}
                        title={title}
                        authorProfilePicture={authorProfilePicture}
                      />);
                  })}
                </div>
              </div>
            </div>
          </> : ""
      } */}
      <BreadCrumb
        list={[
          { path: "/", name: "Beranda" },
          { path: "/forums", name: "Forum" },
          { path: `/forums/${id}/${slug}`, name: detailForum?.title },
        ]}
      />
      <div className="forum-section">
        <div className="forum-judul">Diskusi</div>
        <div className="forumtopik-container">
          <div className="topik-left">
            <QuestionSection
              title={detailForum?.title}
              author={detailForum?.author}
              authorProfilePicture={detailForum?.authorProfilePicture}
              postedDate={detailForum?.postedDate}
              question={detailForum?.question}
            />
            <CommentSection comments={detailForum?.comments} />
          </div>
          <div className="topik-right">
            <h1 className="title-right">PERTANYAAN TERKAIT</h1>
            {detailForum?.relatedQuestion.map((item, index) => {
              const { id, title, authorProfilePicture } = item;
              return <RelatedQuestionItem key={index} id={id} title={title} authorProfilePicture={authorProfilePicture} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DetailForumPage;
