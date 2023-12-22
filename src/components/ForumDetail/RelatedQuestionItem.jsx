import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import titleToSlug from "../../utils/titleToSlugs";

function RelatedQuestionItem({ id, title, authorProfilePicture }) {
  return (
    <div className="question-section">
      <img className="relate-prof" src={authorProfilePicture} alt="" />
      <Link to={`/forums/${id}/${titleToSlug(title)}`} className="question">
        {title}
      </Link>
    </div>
  );
}

RelatedQuestionItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  authorProfilePicture: PropTypes.string.isRequired,
};

export default RelatedQuestionItem;
