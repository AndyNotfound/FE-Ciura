import PropTypes from 'prop-types'

function CommentCard({ author, authorProfilePicture, postedDate, like, comment }) {
    return (
        <>
            <div className="user-area">
                <div className="user-left-bottom">
                    <img src={authorProfilePicture} alt="" />
                    <div className="nama">
                        <p className="name">{author}</p>
                        <p>{postedDate}</p>
                    </div>
                </div>
                <div className="user-right-bottom">
                    <p>{`${like} Suka`}</p>
                </div>
            </div>
            <div className="user-comment">
                {comment}
            </div>
            <div className="btn-user-comment">
                <a className="btn-comment" href="#">
                    Balas
                </a>
                <a className="btn-comment" href="#">
                    Suka
                </a>
            </div>
        </>
    )
}

CommentCard.propTypes = {
    author: PropTypes.string.isRequired,
    authorProfilePicture: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    like: PropTypes.number.isRequired,
}

export default CommentCard