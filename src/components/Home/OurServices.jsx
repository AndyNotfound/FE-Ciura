import { Link } from "react-router-dom";

function OurServicesSection() {
  return (
    <section className="layanan-kami">
      <h1 className="judul-layanan">Layanan kami</h1>
      <div className="layanan">
        <div className="kotak-layanan">
          <h1>Cek Gejala</h1>
          <p className="p-layanan">Mengecek gejala anda dengan memberikan pengetahuan informasi terhadap anemia.</p>
          <Link className="btn-layanan" to={"/faq"}>
            Lihat
          </Link>
        </div>
        <div className="kotak-layanan">
          <h1>Artikel</h1>
          <p className="p-layanan">Artikel memberikan pengetahuan maupun sebagai sumber informasi pada penderita anemia</p>
          <Link className="btn-layanan" to={"/articles"}>
            Lihat
          </Link>
        </div>
        <div className="kotak-layanan">
          <h1>Aplikasi</h1>
          <p className="p-layanan">Lihat fitur aplikasi mobile kami dan unduh aplikasi mobile yang dapat membantu penyebuhan anemia.</p>
          <Link className="btn-layanan" to={"/application"}>
            Lihat
          </Link>
        </div>
        <div className="kotak-layanan">
          <h1>Nutrisi</h1>
          <p className="p-layanan">Penuhi kebutuhan nutrisi anda dengan rekomendasi nutrisi dan pantangan makanan dari kami</p>
          <Link className="btn-layanan" to={"/nutrition"}>
            Lihat
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurServicesSection;
