import "../styles/ArticleListPage.css";
import Layout from "../components/Layout";
import BreadCrumb from '../components/BreadCrumb'
import ArticleCard from '../components/ArticleCard'
import HighlightedArticle from '../components/Articles/HighlightedArticle'
import { articlesArray } from '../utils/data'

function ArticleListPage() {

    return (
        <Layout>
            <BreadCrumb
                list={[
                    { path: "/", name: "Beranda" },
                    { path: "/articles", name: "Artikel" }
                ]}
            />
            <HighlightedArticle
                id={articlesArray[0]?.id}
                thumbnail={articlesArray[0]?.thumbnail}
                title={articlesArray[0]?.title}
                desc={articlesArray[0]?.desc}
                postDate={articlesArray[0]?.postDate}
            />
            <div className="article-container">
                <h2>Artikel Lainnya</h2>
                {articlesArray?.filter((_, index) => index !== 0).map((item, index) => {
                    const { id, thumbnail, title, desc, postDate } = item;
                    return (
                        <ArticleCard
                            key={index}
                            id={id}
                            thumbnail={thumbnail}
                            title={title}
                            desc={desc}
                            postDate={postDate}
                        />
                    )
                })}
            </div>
        </Layout>
    )
}

export default ArticleListPage