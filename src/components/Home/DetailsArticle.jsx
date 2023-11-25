function DetailsArticle() {
  return (
    <>
      <div className="isi">
        <div className="page-link">
          <a href="#">Beranda > </a>{" "}
          <span>
            <a href="#"> Cek gejala > </a>
          </span>{" "}
          <span>
            <a href="#">Nutrisi untuk anemia </a>
          </span>
        </div>
        <h1>Nutrisi untuk Anemia</h1>
        <div className="container-datails-article">
          <div className="detailleft-container">
            <div className="date">Di unggah pada 22 November 2023</div>
            <img src="/detail-article.png" alt="" />
            <div className="penjelasan">
              <p className="paragraf">
                Di Indonesia diperkirakan sebagian besar anemia terjadi karena kekurangan zat besi sebagai akibat dari kurangnya asupan makanan sumber zat besi khususnya sumber pangan hewani (besi
                heme). Zat besi dalam sumber pangan hewani (besi heme) dapat diserap tubuh antara 20-30%.
              </p>

              <p className="paragraf">
                Sumber utama zat besi adalah pangan hewani (besi heme), seperti :
                <ul>
                  <li className="list">Hati</li>
                  <li className="list">Daging (sapi dan kambing)</li>
                  <li className="list">Unggas (ayam, bebek, burung)</li>
                  <li className="list">Ikan. </li>
                </ul>
              </p>

              <p className="paragraf">
                Pangan nabati (tumbuh-tumbuhan) juga mengandung zat besi (besi non-heme) namun jumlah zat besi yang bisa diserap oleh usus jauh lebih sedikit dibanding zat besi dari bahan makanan
                hewani.{" "}
              </p>

              <p className="paragraf">
                Zat besi non-heme (pangan nabati) yang dapat diserap oleh tubuh adalah 1-10%. Contoh pangan nabati sumber zat besi adalah. Sayuran berwarna hijau tua (bayam, singkong, kangkung)
                Kelompok kacang-kacangan (tempe, tahu, kacang merah){" "}
              </p>

              <p className="paragraf">
                Untuk meningkatkan penyerapan zat besi dalam usus, sebaiknya mengonsumsi makanan kaya sumber vitamin C seperti :
                <ul>
                  <li className="list"> Jeruk</li>
                  <li className="list"> Jambu</li>
                </ul>
              </p>
              <p className="paragraf">
                Dan menghindari konsumsi makanan yang banyak mengandung zat yang dapat menghambat penyerapan zat besi dalam usus dalam jangka panjang dan pendek seperti : Tanin (dalam teh hitam, kopi)
                <ul>
                  <li className="list">Kalsium</li>
                  <li className="list">Fosfor</li>
                  <li className="list">Serat</li>
                  <li className="list">Fitat (biji-bijian)</li>
                </ul>
              </p>

              <p className="paragraf">Sebab Tanin dan fitat mengikat dan menghambat penyerapan besi dari makanan.</p>
            </div>
          </div>
          <div className="detailright-container">
            <h2>Artikel lainnya</h2>
            <div className="detailbaca-container">
              <div className="isian">
                <h2>Apa saja jenis-jenis anemia?</h2>
                <p>Terdapat beberapa jenis anemia yang dapat mempengaruhi individu. Beberapa jenis anemia yang umum meliputi.</p>
              </div>
              <div className="ket-bot">
                <div className="detaildate-container">22 November 2023</div>

                <img className="detailbtn-save" src="/save-img.svg" alt="" />

                <a className="detailbtn-baca" href="#">
                  Baca
                </a>
              </div>
            </div>
            <div className="detailbaca-container">
              <div className="isian">
                <h2>Penyebab anemia</h2>
                <p>Anemia dapat disebabkan oleh beberapa faktor dan penyebab yang berbeda, seperti kekurangan nutrisi dan bentuk malnutrisi.</p>
              </div>
              <div className="ket-bot">
                <div className="detaildate-container">22 November 2023</div>

                <img className="detailbtn-save" src="/save-img.svg" alt="" />

                <a className="detailbtn-baca" href="#">
                  Baca
                </a>
              </div>
            </div>
            <div className="detailbaca-container">
              <div className="isian">
                <h2>Edukasi anemia sejak dini</h2>
                <p>Penting untuk mengedukasi masyarakat tentang anemia dan pentingnya pencegahan sejak dini.</p>
              </div>
              <div className="ket-bot">
                <div className="detaildate-container">22 November 2023</div>

                <img className="detailbtn-save" src="/save-img.svg" alt="" />

                <a className="detailbtn-baca" href="#">
                  Baca
                </a>
              </div>
            </div>
            <div className="detailbaca-container">
              <div className="isian">
                <h2>Apa itu anemia?</h2>
                <p>Anemia merupakan kondisi medis yang terjadi ketika jumlah sel darah merah dalam tubuh lebih rendah dari jumlah normal.</p>
              </div>
              <div className="ket-bot">
                <div className="detaildate-container">22 November 2023</div>

                <img className="detailbtn-save" src="/save-img.svg" alt="" />

                <a className="detailbtn-baca" href="#">
                  Baca
                </a>
              </div>
            </div>
            <div className="detailbaca-container">
              <div className="isian">
                <h2>Cara mencegah anemia</h2>
                <p>Jika kamu ingin mencegah anemia, sebaiknya perbanyak konsumsi makanan yang kaya akan zat besi.</p>
              </div>
              <div className="ket-bot">
                <div className="detaildate-container">22 November 2023</div>
                <img className="detailbtn-save" src="/save-img.svg" alt="" />
                <a className="detailbtn-baca" href="#">
                  Baca
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailsArticle;
