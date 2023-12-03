import { IoLogoGooglePlaystore } from "react-icons/io5";
function application() {
  return (
    <>
      <section className="container">
        <div className="container-left">
          <h1 className="judul">Fitur Aplikasi</h1>
          <p className="hero-desc">Fitur dan layanan yang tersedia untuk membantu dalam penyembuhan anemia</p>
          <div className="download gp">
            <IoLogoGooglePlaystore className="fa-brands" />
            <span className="p1">GET IT ON</span>
            <span className="p2">Google Play</span>
          </div>
        </div>
        <div className="container-right">
          <img className="showcase" src="/woman-cloud.png" alt="" />
        </div>
      </section>
      <section className="fitur-section">
        <div className="fitur-app">
          <div className="fitur fitur-status">
            <img className="app-img1" src="/anemia-status.png" alt="" />
            <div className="judul-fitur">
              <div className="title-fitur">Fitur Anemia Status</div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ornare turpis nunc malesuada rhoncus dignissim aliquam tristique scelerisque. Mi porta tortor mauris commodo a id pulvinar. Consequat amet
                turpis tellus commodo. Nullam{" "}
              </p>
            </div>
          </div>
          <div className="fitur fitur-nutrisi">
            <div className="judul-fitur2">
              <div className="title-fitur">Fitur Nutrisi</div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ornare turpis nunc malesuada rhoncus dignissim aliquam tristique scelerisque. Mi porta tortor mauris commodo a id pulvinar. Consequat amet
                turpis tellus commodo. Nullam{" "}
              </p>
            </div>
            <img className="app-img2" src="/fitur-nutrisi.png" alt="" />
          </div>
          <div className="fitur fitur-pengingat">
            <img className="app-img3" src="/fitur-pengingat.png" alt="" />
            <div className="judul-fitur3">
              <div className="title-fitur">Fitur Pengingat</div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ornare turpis nunc malesuada rhoncus dignissim aliquam tristique scelerisque. Mi porta tortor mauris commodo a id pulvinar. Consequat amet
                turpis tellus commodo. Nullam{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default application;
