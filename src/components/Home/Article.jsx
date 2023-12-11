import { Link } from 'react-router-dom';
import ArticleCard from '../ArticleCard';
import { articlesArrayLimitThree } from '../../utils/data';
// import fetchData from '../../helpers/fetch';
// import useAsync from '../../helpers/hooks/useAsync';
// import { useEffect } from 'react';

function ArticleSection() {
  // const { data, run, isLoading, isSuccess } = useAsync({
  //   data: { username: "Hello" },
  // });

  // useEffect(() => {
  //   run(
  //     fetchData({ url: "/api/articles/?limit=3" }),
  //   );
  // }, [run]);

  return (
    <section className="artikel">
      <h1 className="judul-artikel">Artikel</h1>
      <div className="Artikel">
        {/* {
          isLoading ?
            <h1>Loading</h1>
            : isSuccess ?
              <>
                {data?.articles.map((item, index) => {
                  const { id, thumbnail, title, desc, postDate, link } = item;
                  return (
                    <ArticleCard
                      id={id}
                      key={index}
                      thumbnail={thumbnail}
                      title={title}
                      desc={desc}
                      postDate={postDate}
                      link={link}
                    />
                  )
                })}
              </>
              : ""
        } */}
        {articlesArrayLimitThree?.map((item, index) => {
          const { id, thumbnail, title, desc, postDate, link } = item;
          return (
            <ArticleCard
              id={id}
              key={index}
              thumbnail={thumbnail}
              title={title}
              desc={desc}
              postDate={postDate}
              link={link}
            />
          )
        })}
      </div>
      <div className="btn-lainnya">
        <Link to={"/articles"}>Artikel lainnya</Link>
      </div>
    </section>
  );
}
export default ArticleSection;
