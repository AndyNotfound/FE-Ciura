import { Link } from "react-router-dom";
import titleToSlug from "../utils/titleToSlugs";

function ArticleCard({ thumbnail, title, desc, postDate }) {
  return (
    <div className="kotak-Artikel">
      <img src={thumbnail} alt="" />
      <div className="isi-kotak">
        <h1>{title}</h1>
        <p className="p-Artikel">{desc}</p>
        <div className="ket-bot">
          <div className="tgl-artikel">
            <p>{postDate}</p>
          </div>

          <Link className="detailbtn-baca" to={`/articles/${titleToSlug(title)}`}>
            Baca
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
