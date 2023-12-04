import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import titleToSlug from "../../utils/titleToSlugs";

function RelatedArticleCard({ id, title, desc, postDate }) {
  return (
    <div className="detailbaca-container">
      <div className="isian">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className="ket-cardnutrition">
        <div className="detaildate-container">{postDate}</div>

        <img className="detailbtn-save" src="/save-img.svg" alt="" />

        <Link className="btn-bacaArticle" to={`/articles/${id}/${titleToSlug(title)}`}>
          Baca
        </Link>
      </div>
    </div>
  );
}

RelatedArticleCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired
}

export default RelatedArticleCard;
