import { IoLogoGooglePlaystore } from "react-icons/io5";

function AppHero() {
    return (
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
    )
}

export default AppHero