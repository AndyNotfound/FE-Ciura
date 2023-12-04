import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import titleToSlug from "../../utils/titleToSlugs";

function HighlightedArticles({ thumbnail, title, desc }) {
    return (
        <div className="highlighted">
            <div className="highlighted-detail">
                <h1>{title}</h1>
                <p>{desc}</p>
                <div className="btn-artikel">
                    <Link
                        className="btn-Artikel"
                        to={
                            `/articles/${titleToSlug(title)}`
                        }
                    >
                        Lanjut Baca
                    </Link>
                </div>
            </div>
            <img src={thumbnail} alt="" className="highlighted-thumbnail" />
        </div>
    )
}

HighlightedArticles.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}

export default HighlightedArticles;