function DetailForum() {
  return (
    <>
      <div className="forum-section">
        <div className="forum-judul">Diskusi</div>
        <a href="" className="btn-imunisasi">
          Imunisasi
        </a>
        <div className="search">
          <input className="cari-bahasan" type="search" placeholder="Cari bahasan di sini" />
          <button className="search-icon" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <a className="btn-forum" href="#">
            cari
          </a>
        </div>

        <div className="forumtopik-container">
          <div className="topik-left">
            <div className="topik-forum">Apa saja ciri - ciri anemia pada remaja ?</div>
            <div className="user-container">
              <div className="user-left">
                <img src="/img/profil-img.svg" alt="" />
                <div className="nama">
                  <p>Novalinda Putri</p>
                  <p>User</p>
                </div>
              </div>
              <div className="user-right">
                <div className="date-post">
                  <p>21 November 2023</p>
                  <p>13.53</p>
                </div>
              </div>
            </div>
            <div className="comment">
              Saya seorang guru SMA, ada salah satu anak murid saya dia perempuan usia 17 th. di kelar sering terlihat lemas, pucat, loyo kaya gada tenaga serta dia juga beberapa kali minta ijin untuk
              ke UKS karena pusing. Apakah siswa tersebut mengalami ciri-ciri gejala penyakit anemia?
            </div>

            <div className="option">
              <div className="option-left">
                <p className="p-option">4 Komentar</p>
              </div>
              <div className="option-right">
                <div className="option-right-icon">
                  <a href="">Bagikan</a>
                  <img src="/facebook-icon.png" alt="" />
                  <img src="/twitter-logo-forum.png" alt="" />
                  <i className="fa-solid fa-envelope"></i>
                </div>
              </div>
            </div>
            <div className="commen-area">
              <input className="text-comment" placeholder="Tulis Komentar Anda" type="text" />
              <a href="#" className="send">
                Kirim
              </a>
            </div>
            <div className="user-area">
              <div className="user-left-bottom">
                <img src="/profil-img.svg" alt="" />
                <div className="nama">
                  <p className="name">Febrinaa.nt</p>
                  <p>Novalinda Putri</p>
                  <p>User</p>
                </div>
              </div>
              <div className="user-right-bottom">
                <p>2 Suka</p>
              </div>
            </div>
            <div className="user-comment">
              Hallo bu, bantu jawab ya!, Anemia memang merupakan salah satu faktor penyebab seseorang menjadi lemas, pucat, loyo, dan juga pusing. Anemia sendiri terjadi ketika kadar hemoglobin (Hb,
              zat merah darah) kurang dari normal. Tidak hanya anemia, keluhan seperti yang murid Anda alami bisa pula muncul akibat faktor lain, contohnya dehidrasi, hipotensi, hipoglikemia,
              kardiomiopati, infeksi, dispepsia, gangguan hormon, gangguan psikis, gangguan hati, kurang tidur, kelelahan beraktifitas, dan sebagainya.
            </div>
            <div className="btn-user-comment">
              <a className="btn-comment" href="#">
                Balas
              </a>
              <a className="btn-comment" href="#">
                Suka
              </a>
            </div>
          </div>
          <div className="topik-right">
            <h1 className="title-right">PERTANYAAN TERKAIT</h1>
            <div className="question-section">
              <img src="profil-img.svg" alt="" />
              <p className="question">Bagaimana mencegah anemia?</p>
            </div>
            <div className="question-section">
              <img src="profil-img.svg" alt="" />
              <p className="question">Cara mendiagnosa anemia?</p>
            </div>
            <div className="question-section">
              <img src="profil-img.svg" alt="" />
              <p className="question">Apa peran nutrisi dalam mengatasi anemia?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailForum;
