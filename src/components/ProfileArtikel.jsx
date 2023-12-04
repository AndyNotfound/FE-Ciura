import ArticleCard from "./ArticleCard";

const articlesArray = [
  {
    id: 1,
    thumbnail: "/artikel-img.png",
    title: "Apa itu anemia?",
    desc: "Anemia merupakan kondisi medis yang terjadi ketika jumlah sel darah merah dalam tubuh lebih rendah dari jumlah normal.",
    postDate: "22 November 2023",
    link: "#",
  },
  {
    id: 2,
    thumbnail: "/artikel-img2.png",
    title: "Nutrisi untuk anemia",
    desc: "Salah satu sumber makanan yang dapat menambah asupan zat besi di dalam tubuh.",
    postDate: "22 November 2023",
    link: "#",
  },
];

function SideMenuArtikel() {
  return (
    <div className="menuprofile-section">
      <div className="artikel-akun-section">
        <div className="judul-edit-artikel">Artikel Tersimpan</div>
        <div className="Artikel-profil">
          {articlesArray?.map((item, index) => {
            const { id, thumbnail, title, desc, postDate, link } = item;
            return <ArticleCard id={id} key={index} thumbnail={thumbnail} title={title} desc={desc} postDate={postDate} link={link} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default SideMenuArtikel;
