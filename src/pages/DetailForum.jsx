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

<<<<<<< HEAD
  const topic = forumQuestion.find((topic) => topic.id == id);
=======
  const topic = forumQuestion.find((topic) => topic.id == id)
>>>>>>> db0967d6f4c03d946ff2224e6b66f07520175b7d

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
<<<<<<< HEAD
            <QuestionSection title={topic?.title} author={topic?.author} authorProfilePicture={topic?.authorProfilePicture} postedDate={topic?.postedDate} question={topic?.question} />
=======
            <QuestionSection
              title={topic?.title}
              author={topic?.author}
              authorProfilePicture={topic?.authorProfilePicture}
              postedDate={topic?.postedDate}
              question={topic?.question}
            />
>>>>>>> db0967d6f4c03d946ff2224e6b66f07520175b7d
            <CommentSection comments={topic?.comments} />
          </div>
          <div className="topik-right">
            <h1 className="title-right">PERTANYAAN TERKAIT</h1>
            {topic?.relatedQuestion.map((item, index) => {
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
