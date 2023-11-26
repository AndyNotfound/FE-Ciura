import { Link } from 'react-router-dom'
import titleToSlug from '../../utils/titleToSlugs'

function RelatedArticleCard({ title, desc, postDate }) {
    return (
        <div className="detailbaca-container">
            <div className="isian">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
            <div className="ket-bot">
                <div className="detaildate-container">{postDate}</div>

                <img className="detailbtn-save" src="/save-img.svg" alt="" />

                <Link
                    className="btn-Artikel"
                    to={
                        `/articles/${titleToSlug(title)}`
                    }
                >
                    Baca
                </Link>
            </div>
        </div>
    )
}

export default RelatedArticleCard