import { Link } from 'react-router-dom'
import titleToSlug from '../../utils/titleToSlugs'
import PropTypes from 'prop-types'

function SavedForumCard({ id, title, authorProfilePicture, postedDate, question, comments }) {
    return (
        <div className="saved-forum-card">
            <div className="saved-forum-card__post">
                <div className="saved-forum-card__post-profile">
                    <img src={authorProfilePicture} alt="" />
                    <Link to={`/forums/${id}/${titleToSlug(title)}`}>{title}</Link>
                </div>
                <div className="saved-forum-card__post-info">
                    {comments.length > 0 ?
                        <p>
                            {`${comments.length} Komentar`} <img src="/profile-forum-comment.png" alt="" />
                        </p> :
                        <p>
                            Belum ada Komentar
                        </p>
                    }
                    <p>
                        {postedDate} <img src="/profile-forum-clock.png" alt="" />
                    </p>
                </div>
            </div>
            <p className="saved-forum-card__question">{question}</p>
        </div>
    )
}

SavedForumCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    authorProfilePicture: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
}

export default SavedForumCard