import PropTypes from 'prop-types'

function QuestionSection({ title, author, authorProfilePicture, postedDate, question }) {
    return (
        <>
            <div className="topik-forum">{title}</div>
            <div className="user-container">
                <div className="user-left">
                    <img src={authorProfilePicture} alt="" />
                    <div className="nama">
                        <p>{author}</p>
                    </div>
                </div>
                <div className="user-right">
                    <div className="date-post">
                        <p>{postedDate}</p>
                    </div>
                </div>
            </div>
            <div className="comment">
                {question}
            </div>
        </>
    )
}

QuestionSection.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorProfilePicture: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired
}

export default QuestionSection