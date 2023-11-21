function Artikel() {
  return (
    <>
      <section className="artikel">
        <h1 className="judul-artikel">Artikel</h1>
        <div className="Artikel">
          <div className="kotak-Artikel">
            <img src="/artikel-img.png" alt="" />
            <div className="isi-kotak">
              <h1>Apa itu anemia?</h1>
              <p className="p-Artikel">Anemia merupakan kondisi medis yang terjadi ketika jumlah sel darah merah dalam tubuh lebih rendah dari jumlah normal.</p>
              <div className="tgl-artikel">
                <p>22 November 2023</p>
              </div>
              <div className="btn-artikel">
                <a className="btn-Artikel" href="#">
                  Baca
                </a>
              </div>
            </div>
          </div>
          <div className="kotak-Artikel">
            <img src="/artikel-img2.png" alt="" />
            <div className="isi-kotak">
              <h1>Nutrisi untuk anemia</h1>
              <p className="p-Artikel">Salah satu sumber makanan yang dapat menambah asupan zat besi di dalam tubuh.</p>
              <div className="tgl-artikel2">
                <p>22 November 2023</p>
              </div>
              <div className="btn-artikel2">
                <a className="btn-Artikel" href="#">
                  Baca
                </a>
              </div>
            </div>
          </div>
          <div className="kotak-Artikel">
            <img src="/artikel-img3.png" alt="" />
            <div className="isi-kotak">
              <h1>Cara mencegah anemia</h1>
              <p className="p-Artikel">Jika kamu ingin mencegah anemia, sebaiknya perbanyak konsumsi makanan yang kaya akan zat besi.</p>
              <div className="tgl-artikel2">
                <p>22 November 2023</p>
              </div>
              <div className="btn-artikel2">
                <a className="btn-Artikel" href="#">
                  Baca
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-lainnya">
          <a href="#">Artikel lainnya</a>
        </div>
      </section>
    </>
  );
}
export default Artikel;
