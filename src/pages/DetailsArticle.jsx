import "../styles/DetailsArticlePage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { articlesArray } from "../utils/data";
import BreadCrumb from "../components/BreadCrumb";
import titleToSlug from "../utils/titleToSlugs";
import RelatedArticleCard from "../components/ArticleDetail/RelatedArticleCard";
import Layout from "../components/Layout";

function DetailsArticlePage() {
  const { title } = useParams();
  const [article, setArticle] = useState(undefined);

  useEffect(() => {
    const filteredArticles = articlesArray.find((article) => titleToSlug(article.title) == title)
    setArticle(filteredArticles)
  }, [title]);

  return (
    <Layout>
      <div className="isi">
        <BreadCrumb />
        <h1>{article?.title}</h1>
        <div className="container-datails-article">
          <div className="detailleft-container">
            <div className="date">{`Di unggah pada ${article?.postDate} `}</div>
            <img src={article?.thumbnail} alt="" />
            <div className="penjelasan">
              <p className="paragraf">
                Di Indonesia diperkirakan sebagian besar anemia terjadi karena kekurangan zat besi sebagai akibat dari kurangnya asupan makanan sumber zat besi khususnya sumber pangan hewani (besi
                heme). Zat besi dalam sumber pangan hewani (besi heme) dapat diserap tubuh antara 20-30%.
              </p>

              <p className="paragraf">
                Sumber utama zat besi adalah pangan hewani (besi heme), seperti :
                <ul>
                  <li className="list">Hati</li>
                  <li className="list">Daging (sapi dan kambing)</li>
                  <li className="list">Unggas (ayam, bebek, burung)</li>
                  <li className="list">Ikan. </li>
                </ul>
              </p>

              <p className="paragraf">
                Pangan nabati (tumbuh-tumbuhan) juga mengandung zat besi (besi non-heme) namun jumlah zat besi yang bisa diserap oleh usus jauh lebih sedikit dibanding zat besi dari bahan makanan
                hewani.{" "}
              </p>

              <p className="paragraf">
                Zat besi non-heme (pangan nabati) yang dapat diserap oleh tubuh adalah 1-10%. Contoh pangan nabati sumber zat besi adalah. Sayuran berwarna hijau tua (bayam, singkong, kangkung)
                Kelompok kacang-kacangan (tempe, tahu, kacang merah){" "}
              </p>

              <p className="paragraf">
                Untuk meningkatkan penyerapan zat besi dalam usus, sebaiknya mengonsumsi makanan kaya sumber vitamin C seperti :
                <ul>
                  <li className="list"> Jeruk</li>
                  <li className="list"> Jambu</li>
                </ul>
              </p>
              <p className="paragraf">
                Dan menghindari konsumsi makanan yang banyak mengandung zat yang dapat menghambat penyerapan zat besi dalam usus dalam jangka panjang dan pendek seperti : Tanin (dalam teh hitam, kopi)
                <ul>
                  <li className="list">Kalsium</li>
                  <li className="list">Fosfor</li>
                  <li className="list">Serat</li>
                  <li className="list">Fitat (biji-bijian)</li>
                </ul>
              </p>

              <p className="paragraf">Sebab Tanin dan fitat mengikat dan menghambat penyerapan besi dari makanan.</p>
            </div>
          </div>
          <div className="detailright-container">
            <h2>Artikel lainnya</h2>
            {articlesArray?.map((item, index) => {
              const { id, title, desc, postDate } = item;
              return (
                <RelatedArticleCard
                  title={title}
                  desc={desc}
                  postDate={postDate}
                  id={id}
                  key={index}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DetailsArticlePage;
