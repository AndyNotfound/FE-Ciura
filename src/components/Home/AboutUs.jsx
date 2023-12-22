function AboutUsSection() {
  return (
    <section>
      <h1 className="jdl-kami">Tentang kami</h1>
      <div className="tentang-kami">
        <div className="area-left">
          <h1 className="salam-kenal">
            Halo! Salam kenal <span className="kami">Masapuan Grup!</span>
          </h1>
          <div className="p-kami">
            <p>
              Selamat datang di ciura ! Teman setia Anda dalam perjalanan kesehatan! Kami dengan bangga mempersembahkan solusi inovatif kami untuk membantu Anda mengelola kondisi anemia dengan lebih
              mudah dan efektif.
            </p>
            <p>Aplikasi kami didesain dengan antarmuka yang ramah pengguna, memastikan bahwa setiap langkahnya sederhana namun informatif.</p>
          </div>
        </div>
        <div className="area-right">
          <img className="img-kami" src="/tentangkami-img.png" alt="" />
          <img className="vector2" src="/Vector2.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
export default AboutUsSection;
