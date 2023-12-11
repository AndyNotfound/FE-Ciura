import "../styles/DetailArticlePage.css";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import RelatedArticleCard from "../components/ArticleDetail/RelatedArticleCard";
import Layout from "../components/Layout";
import parse from 'html-react-parser';
import { detailArticle } from "../utils/data";
// import useAsync from "../helpers/hooks/useAsync";
// import fetchData from "../helpers/fetch";
// import { useEffect } from "react";

function DetailArticlePage() {
  const { id, slug } = useParams();

  // const { data, run, isLoading, isSuccess } = useAsync({
  //   data: { username: "Hello" },
  // });

  // useEffect(() => {
  //   run(
  //     fetchData({ url: `/api/articles/${id}` }),
  //   );
  // }, [run, id]);

  return (
    <Layout>
      {/* {isLoading ?
        <h1>Loading</h1>
        : isSuccess ?
          <div className="isi">
            <BreadCrumb
              list={[
                { path: "/", name: "Beranda" },
                { path: "/articles", name: "Artikel" },
                { path: `/articles/${id}/${slug}`, name: data?.title }
              ]}
            />
            <h1>{data?.title}</h1>
            <div className="container-datails-article">
              <div className="detailleft-container">
                <div className="date">{`Di unggah pada ${data?.postDate} `}</div>
                <img src={data?.thumbnail} alt="" />
                <div className="penjelasan">
                  {parse(data?.content)}
                </div>
              </div>
              <div className="detailright-container">
                <h2>Artikel lainnya</h2>
                {data?.relatedArticles.map((item, index) => {
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
          : ""
      } */}
      <div className="isi">
        <BreadCrumb
          list={[
            { path: "/", name: "Beranda" },
            { path: "/articles", name: "Artikel" },
            { path: `/articles/${id}/${slug}`, name: detailArticle?.title }
          ]}
        />
        <h1>{detailArticle?.title}</h1>
        <div className="container-datails-article">
          <div className="detailleft-container">
            <div className="date">{`Di unggah pada ${detailArticle?.postDate} `}</div>
            <img src={detailArticle?.thumbnail} alt="" />
            <div className="penjelasan">
              <div className="penjelasan">
                {parse(detailArticle?.content)}
              </div>
            </div>
          </div>
          <div className="detailright-container">
            <h2>Artikel lainnya</h2>
            {detailArticle?.relatedArticles.map((item, index) => {
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

export default DetailArticlePage;
