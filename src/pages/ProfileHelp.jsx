import Layout from "../components/Layout";
import HelpAccordion from "../components/ProfileHelp/HelpAccordion";
import SideMenu from "../components/Sidemenu";
import "../styles/ProfileHelpListPage.css";

const helpArray = [
  {
    id: 1,
    title: "Kenapa saya harus mendaftar?",
    desc: "Anda akan memperoleh banyak keuntungan setelah mendaftar ke website Ciura. Anda bisa mendapatkan informasi terkait anemia, mengakses artikel, membuat forum diskusi, dan mendapatkan rekomendasi nutrisi yang baik dikonsumsi untuk penderita anemia.",
  },
  {
    id: 2,
    title: "Apa Menggunakan website ini gratis?",
    desc: "Mengakses informasi di Ciura adalah gratis dan akan selalu demikian. Namun, untuk beberapa layanan yang menghubungkan Anda dengan pihak ketiga, mungkin ada yang berbayar. Informasi selengkapnya bisa didapatkan di Kebijakan Iklan dan Sponsor kami.",
  },
  {
    id: 3,
    title: "Saya punya pertanyaan medis, bagaimana cara menyampaikannya?",
    desc: "Informasi di website Ciura bukanlah pengganti konsultasi medis. Kami tidak menyediakan diagnosis atau rekomendasi pengobatan. Kami selalu menyarankan bila Anda memiliki pertanyaan, sebaiknya segera bertanya pada dokter atau pakar kesehatan profesional lainnya.",
  },
  {
    id: 4,
    title: "Saya khawatir dengan Privasi",
    desc: "Ciura memiliki aturan ketat dalam rangka melindungi privasi dan informasi milik pengguna. Untuk informasi lebih jelas, silakan kunjungi laman Kebijakan Privasi kami. Kami tidak akan menggunakan informasi pribadi Anda tanpa persetujuan.",
  },
  {
    id: 5,
    title: "Bila saya menghapus akun, apa yang akan terjadi pada data saya?",
    desc: "Saat Anda menghapus akun, kami juga akan menghapus data pribadi Anda. Namun biasanya kami akan menyimpan data selama 80 hari setelah tanggal penghapusan, untuk berjaga-jaga seandainya Anda hendak mendaftar kembali.",
  },
];
function ProfileHelpListPage() {
  return (
    <Layout>
      <div className="profile-layout">
        <SideMenu />
        <div className="profile-help">
          <h1>Bantuan</h1>
          <div className="profile-help__container">
            {helpArray?.map((item, index) => {
              const { id, title, desc } = item;
              return <HelpAccordion key={index} id={id} title={title} desc={desc} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProfileHelpListPage;
