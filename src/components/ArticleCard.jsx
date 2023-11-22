function ArticleCard() {
    return (
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
    )
}

export default ArticleCard