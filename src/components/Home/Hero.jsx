function HeroSection() {
  return (
    <section className="container">
      <div className="container-left">
        <h1 className="judul">
          Jaga Dirimu.
          <span>Dengan Menjaga kesehatanmu.</span>
        </h1>
        <p>
          Jangan biarkan <span className="spanHero">kelelahan</span> menjadi teman <span className="spanHero">sehari-hari</span>, Cegah anemia! dengan{" "}
          <span className="spanHero">nutrisi yang tepat!</span>
        </p>
        <button>
          <a href="#">Download App</a>
        </button>
      </div>
      <div className="container-right">
        <img className="logo-awal" src="/woman-cloud.png" alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
