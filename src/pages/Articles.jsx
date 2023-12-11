import "../styles/ArticleListPage.css";
import Layout from "../components/Layout";
import BreadCrumb from '../components/BreadCrumb'
import ArticleCard from '../components/ArticleCard'
import HighlightedArticle from '../components/Articles/HighlightedArticle'
import { articlesArray } from "../utils/data";
// import fetchData from "../helpers/fetch";
// import { useEffect } from "react";
// import useAsync from "../helpers/hooks/useAsync";

function ArticleListPage() {
    // const { data, run, isLoading, isSuccess } = useAsync({
    //     data: { username: "Hello" },
    // });

    // useEffect(() => {
    //     run(
    //         fetchData({ url: "/api/articles" }),
    //     );
    // }, [run]);

    return (
        <Layout>
            <BreadCrumb
                list={[
                    { path: "/", name: "Beranda" },
                    { path: "/articles", name: "Artikel" }
                ]}
            />
            {/* {
                isLoading ?
                    <h1>Loading</h1>
                    : isSuccess ?
                        <>
                            <HighlightedArticle
                                id={data?.articles[0]?.id}
                                thumbnail={data?.articles[0].thumbnail}
                                title={data?.articles[0].title}
                                desc={data?.articles[0].desc}
                                postDate={data?.articles[0].postDate}
                            />
                            <div className="article-container">
                                <h2>Artikel Lainnya</h2>
                                {data?.articles?.filter((_, index) => index !== 0)
                                    .map((item, index) => {
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
                        </>
                        : ""
            } */}
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