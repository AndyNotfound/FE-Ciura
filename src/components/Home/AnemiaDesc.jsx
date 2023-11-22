function AnemiaDescSection() {
  return (
    <section>
      <div className="pengertian">
        <div className="kotak-kiri">
          <img src="/pengertian-img.png" />
        </div>
        <div className="kotak-kanan">
          <h1 className="judul">Apa itu anemia?</h1>
          <p>
            Anemia merupakan kondisi medis yang terjadi ketika jumlah sel darah merah dalam tubuh lebih rendah dari jumlah normal. Sel darah merah adalah sel darah yang bertanggung jawab untuk
            mengirimkan oksigen dari paru-paru ke seluruh tubuh. Ketika sel darah merah dalam tubuh sedikit dan mengalami gangguan, maka tubuh tidak dapat menerima oksigen dengan cukup.
          </p>
          <a className="btn-baca" href="#">
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </section>
  );
}
export default AnemiaDescSection;
