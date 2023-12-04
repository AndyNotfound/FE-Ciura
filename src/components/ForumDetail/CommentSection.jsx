import PropTypes from "prop-types";
import CommentCard from "./CommentCard";

function CommentSection({ comments }) {
  return (
    <>
      <div className="option">
        <div className="option-left">
          <p className="p-option">{comments?.length >= 0 ? `${comments.length} Komentar` : ""}</p>
        </div>
        <div className="option-right">
          <div className="option-right-icon">
            <a href="">Bagikan</a>
            <a href="">
              <img className="icon-share" src="/facebook-icon.png" alt="" />
            </a>

            <a href="">
              <img className="icon-share" src="/twitter-logo-forum'.png" alt="" />
            </a>
            <a href="">
              <img className="icon-share" src="/email-logo-forum.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="commen-area">
        <input className="text-comment" placeholder="Tulis Komentar Anda" type="text" />
        <a href="#" className="send">
          Kirim
        </a>
      </div>
      {comments?.length >= 0 &&
        comments?.map((item, index) => {
          const { author, authorProfilePicture, postedDate, like, comment } = item;
          return <CommentCard key={index} author={author} authorProfilePicture={authorProfilePicture} postedDate={postedDate} like={like} comment={comment} />;
        })}
    </>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentSection;
