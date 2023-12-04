import "../styles/ArticlesPage.css";
import Layout from "../components/Layout";
import BreadCrumb from '../components/BreadCrumb'
import ArticleCard from '../components/ArticleCard'
import HighlightedArticles from '../components/Articles/HighlightedArticles'
import { articlesArray } from '../utils/data'

function ArticlesPage() {
    return (
        <>
            <Layout>
                <BreadCrumb />
                <HighlightedArticles
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
        </>
    )
}

export default ArticlesPage