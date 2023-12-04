import PropTypes from 'prop-types'
import CommentCard from './CommentCard'

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
                        <img src="/facebook-icon.png" alt="" />
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                </div>
            </div>
            <div className="commen-area">
                <input className="text-comment" placeholder="Tulis Komentar Anda" type="text" />
                <a href="#" className="send">
                    Kirim
                </a>
            </div>
            {comments?.length >= 0 && comments?.map((item, index) => {
                const { author, authorProfilePicture, postedDate, like, comment } = item;
                return (
                    <CommentCard
                        key={index}
                        author={author}
                        authorProfilePicture={authorProfilePicture}
                        postedDate={postedDate}
                        like={like}
                        comment={comment}
                    />
                )
            })}
        </>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentSection