import BreadCrumb from "../components/BreadCrumb";
import QuestionSection from "../components/ForumDetail/QuestionSection";
import { useParams } from "react-router-dom";
import { forumQuestion } from "../utils/data";
import CommentSection from "../components/ForumDetail/CommentSection";
import Layout from "../components/Layout";
import "../styles/DetailForumPage.css";
import RelatedQuestionItem from "../components/ForumDetail/RelatedQuestionItem";

function DetailForumPage() {
  const { id, slug } = useParams();

  const topic = forumQuestion.find((topic) => topic.id == id)

  return (
    <Layout>
      <BreadCrumb
        list={[
          { path: "/", name: "Beranda" },
          { path: "/forums", name: "Forum" },
          { path: `/forums/${id}/${slug}`, name: topic?.title }
        ]}
      />
      <div className="forum-section">
        <div className="forum-judul">Diskusi</div>
        <div className="forumtopik-container">
          <div className="topik-left">
            <QuestionSection
              title={topic?.title}
              author={topic?.author}
              authorProfilePicture={topic?.authorProfilePicture}
              postedDate={topic?.postedDate}
              question={topic?.question}
            />
            <CommentSection comments={topic?.comments} />
          </div>
          <div className="topik-right">
            <h1 className="title-right">PERTANYAAN TERKAIT</h1>
            {topic?.relatedQuestion.map((item, index) => {
              const { id, title, authorProfilePicture } = item;
              return (
                <RelatedQuestionItem
                  key={index}
                  id={id}
                  title={title}
                  authorProfilePicture={authorProfilePicture}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DetailForumPage;
