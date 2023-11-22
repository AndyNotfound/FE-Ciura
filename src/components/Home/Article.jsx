import ArticleCard from '../ArticleCard';

const articlesArray = [
  {
    thumbnail: '/artikel-img.png',
    title: 'Apa itu anemia?',
    desc: 'Anemia merupakan kondisi medis yang terjadi ketika jumlah sel darah merah dalam tubuh lebih rendah dari jumlah normal.',
    postDate: '22 November 2023',
    link: '#',
  },
  {
    thumbnail: '/artikel-img2.png',
    title: 'Nutrisi untuk anemia',
    desc: 'Salah satu sumber makanan yang dapat menambah asupan zat besi di dalam tubuh.',
    postDate: '22 November 2023',
    link: '#',
  },
  {
    thumbnail: '/artikel-img3.png',
    title: 'Cara mencegah anemia',
    desc: 'Jika kamu ingin mencegah anemia, sebaiknya perbanyak konsumsi makanan yang kaya akan zat besi.',
    postDate: '22 November 2023',
    link: '#',
  },
];

function ArticleSection() {
  return (
    <section className="artikel">
      <h1 className="judul-artikel">Artikel</h1>
      <div className="Artikel">
        {articlesArray?.map((item, index) => {
          const { thumbnail, title, desc, postDate, link } = item;
          return (
            <ArticleCard
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
        <a href="#">Artikel lainnya</a>
      </div>
    </section>
  );
}
export default ArticleSection;
