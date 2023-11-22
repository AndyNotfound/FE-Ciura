import { Link } from 'react-router-dom'

const articlesArray = [
  {
    thumbnail: '/artikel-img.png',
    title: 'Apa itu anemia?',
    desc: 'Anemia merupakan kondisi medis yang terjadi ketika jumlah sel darah merah dalam tubuh lebih rendah dari jumlah normal.',
    postedDate: '22 November 2023',
    link: '#',
  },
  {
    thumbnail: '/artikel-img2.png',
    title: 'Nutrisi untuk anemia',
    desc: 'Salah satu sumber makanan yang dapat menambah asupan zat besi di dalam tubuh.',
    postedDate: '22 November 2023',
    link: '#',
  },
  {
    thumbnail: '/artikel-img3.png',
    title: 'Cara mencegah anemia',
    desc: 'Jika kamu ingin mencegah anemia, sebaiknya perbanyak konsumsi makanan yang kaya akan zat besi.',
    postedDate: '22 November 2023',
    link: '#',
  },
];

function ArticleSection() {
  return (
    <section className="artikel">
      <h1 className="judul-artikel">Artikel</h1>
      <div className="Artikel">
        {articlesArray?.map((item, index) => {
          return (
            <div key={index} className="kotak-Artikel">
              <img src={item.thumbnail} alt="" />
              <div className="isi-kotak">
                <h1>{item.title}</h1>
                <p className="p-Artikel">{item.desc}</p>
                <div className="tgl-artikel">
                  <p>{item.postedDate}</p>
                </div>
                <div className="btn-artikel">
                  <Link className="btn-Artikel" href={item.link}>
                    Baca
                  </Link>
                </div>
              </div>
            </div>
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
