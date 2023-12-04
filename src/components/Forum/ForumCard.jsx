import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import titleToSlug from '../../utils/titleToSlugs'

function ForumCard({ id, thumbnail, title, author, authorProfilePicture, postedDate }) {
    return (
        <div className="forum-card">
            <img src={thumbnail} alt="" />
            <div className="card-judul">
                <Link to={`/forums/${id}/${titleToSlug(title)}`}>{title}</Link>
            </div>
            <div className="forum-cardIsi">
                <img src={authorProfilePicture} alt="" />
                <div className="card-desc">
                    <div className="dari">
                        <p className="from">Dari </p>
                        <p>{`${author.split(" ")[0]} . Forum`}</p>
                    </div>
                    <p className="card-link">
                        {`diskusi | ${postedDate}`}
                    </p>
                </div>
            </div>
        </div>
    )
}

ForumCard.propTypes = {
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorProfilePicture: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
}

export default ForumCard