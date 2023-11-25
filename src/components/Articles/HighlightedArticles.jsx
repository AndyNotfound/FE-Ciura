import { Link } from "react-router-dom"

function HighlightedArticles({ thumbnail, title, desc, link }) {
    return (
        <div className="highlighted">
            <div className="highlighted-detail">
                <h1>{title}</h1>
                <p>{desc}</p>
                <div className="btn-artikel">
                    <Link className="btn-Artikel" href={link}>
                        Lanjut Baca
                    </Link>
                </div>
            </div>
            <img src={thumbnail} alt="" className="highlighted-thumbnail" />
        </div>
    )
}

export default HighlightedArticles