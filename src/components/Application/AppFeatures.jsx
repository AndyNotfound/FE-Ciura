function AppFeatures() {
  return (
    <section className="fitur-section">
      <div className="fitur-app">
        <div className="fitur fitur-status">
          <img className="app-img1" src="/anemia-status.png" alt="" />
          <div className="judul-fitur">
            <div className="title-fitur">Fitur Level</div>
            <p>Pengguna bisa input data Hb di Aplikasi Ciura dan otomatis terupdate sesuai dengan level pengguna, serta akan menggambarkan kondisi pengguna saat ini. </p>
          </div>
        </div>
        <div className="fitur fitur-nutrisi">
          <div className="judul-fitur2">
            <div className="title-fitur">Fitur Nutrisi</div>
            <p>Pengguna melihat berbagai macam makanan nutrisi yang baik untuk dikonsumsi serta rekomendasi nutrisi yang harus dihindari saat mengalami anemia. </p>
          </div>
          <img className="app-img2" src="/fitur-nutrisi.png" alt="" />
        </div>
        <div className="fitur fitur-pengingat">
          <img className="app-img3" src="/fitur-pengingat.png" alt="" />
          <div className="judul-fitur3">
            <div className="title-fitur">Fitur Pengingat</div>
            <p>Pengguna bisa mengatur pengingat sesuai kebutuhan. </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppFeatures;
