import { Link } from "react-router-dom";

function OurServicesSection() {
  return (
    <section className="layanan-kami">
      <h1 className="judul-layanan">Layanan kami</h1>
      <div className="layanan">
        <div className="kotak-layanan">
          <h1>Cek Gejala</h1>
          <p className="p-layanan">Lorem ipsum dolor sit amet consectetur. Sit quam tortor ornare eget et nisl dolor fames tellus.</p>
          <Link className="btn-layanan" to={"/faq"}>
            Pergi
          </Link>
        </div>
        <div className="kotak-layanan">
          <h1>Artikel</h1>
          <p className="p-layanan">Lorem ipsum dolor sit amet consectetur. Sit quam tortor ornare eget et nisl dolor fames tellus.</p>
          <Link className="btn-layanan" to={"/articles"}>
            Pergi
          </Link>
        </div>
        <div className="kotak-layanan">
          <h1>Aplikasi</h1>
          <p className="p-layanan">Lorem ipsum dolor sit amet consectetur. Sit quam tortor ornare eget et nisl dolor fames tellus.</p>
          <Link className="btn-layanan" to={"/application"}>
            Pergi
          </Link>
        </div>
        <div className="kotak-layanan">
          <h1>Nutrisi</h1>
          <p className="p-layanan">Lorem ipsum dolor sit amet consectetur. Sit quam tortor ornare eget et nisl dolor fames tellus.</p>
          <Link className="btn-layanan" to={"/nutrition"}>
            Pergi
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurServicesSection;
