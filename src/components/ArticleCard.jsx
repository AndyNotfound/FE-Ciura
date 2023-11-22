import { Link } from "react-router-dom"

function ArticleCard({ thumbnail, title, desc, postDate, link }) {
    return (
        <div className="kotak-Artikel">
            <img src={thumbnail} alt="" />
            <div className="isi-kotak">
                <h1>{title}</h1>
                <p className="p-Artikel">{desc}</p>
                <div className="tgl-artikel">
                    <p>{postDate}</p>
                </div>
                <div className="btn-artikel">
                    <Link className="btn-Artikel" href={link}>
                        Baca
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard