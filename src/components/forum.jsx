function Forum() {
  return (
    <div className="forum-section">
      <div className="forum-judul">Forum</div>
      <div className="search">
        <input type="search" placeholder="Cari bahasan di sini" />
        <button className="search-icon" type="submit">
          <img src="/search-img.svg" alt="" />
        </button>
        <a className="btn-forum" href="#">
          cari
        </a>
      </div>
      <div className="forum-container">
        <div className="forum-card">
          <img src="/forum-img.png" alt="" />
          <div className="card-judul">Apa saja ciri - ciri anemia pada remaja?</div>
          <div className="forum-cardIsi">
            <img src="/profil-forum.svg" alt="" />
            <div className="card-desc">
              <div className="dari">
                <p className="from">Dari </p>
                <p>Novalinda . Forum</p>
              </div>
              <a className="card-link" href="#">
                diskusi
              </a>{" "}
              | November
            </div>
          </div>
        </div>
        <div className="forum-card">
          <img src="/forum-img.png" alt="" />
          <div className="card-judul">Pengaruh anemia dalam beraktivitas?</div>
          <div className="forum-cardIsi">
            <img src="/profil-forum.svg" alt="" />
            <div className="card-desc">
              <div className="dari">
                <p className="from">Dari </p>
                <p>Novalinda . Forum</p>
              </div>
              <a className="card-link" href="#">
                diskusi
              </a>{" "}
              | November
            </div>
          </div>
        </div>
        <div className="forum-card">
          <img src="/forum-img.png" alt="" />
          <div className="card-judul">Apa saja ciri - ciri anemia pada remaja?</div>
          <div className="forum-cardIsi">
            <img src="/profil-forum.svg" alt="" />
            <div className="card-desc">
              <div className="dari">
                <p className="from">Dari </p>
                <p>Novalinda . Forum</p>
              </div>
              <a className="card-link" href="#">
                diskusi
              </a>{" "}
              | November
            </div>
          </div>
        </div>
        <div className="forum-card">
          <img src="/forum-img.png" alt="" />
          <div className="card-judul">Apa saja ciri - ciri anemia pada remaja?</div>
          <div className="forum-cardIsi">
            <img src="/profil-forum.svg" alt="" />
            <div className="card-desc">
              <div className="dari">
                <p className="from">Dari </p>
                <p>Novalinda . Forum</p>
              </div>
              <a className="card-link" href="#">
                diskusi
              </a>{" "}
              | November
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forum;
