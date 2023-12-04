import "../styles/NutritionListPage.css";
import BreadCrumb from "../components/BreadCrumb";
import { recomendationArray, avoidArray } from "../utils/data";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import NutritionCard from "../components/Nutrition/NutritionCard";

function NutritionListPage() {
  return (
    <Layout>
      <BreadCrumb
        list={[
          { path: "/", name: "Beranda" },
          { path: "/nutrition", name: "Nutrisi" }
        ]}
      />
      <div className="title h1-title">Nutrisi Yang Diperlukan Untuk Melawan Anemia</div>
      <div className="img-rekomendasi">
        <Link to={"#recommendation"} className="rekomendasi-img">
          <div className="img-isi">
            Rekomendasi
            <span className="img-isi-span">Rekomendasi Makanan untuk menghadapai anemia dalam masa pemulihan.</span>
          </div>
        </Link>
        <Link to={"#avoid"} className="pantangan-img">
          <div className="img-isi">
            Pantangan
            <span className="img-isi-span">Pantangan makanan pada masa pemulihan anemia.</span>
          </div>
        </Link>
      </div>
      <div id="recommendation" className="title recomendation-title">Rekomendasi</div>
      <div className="card-container">
        {recomendationArray?.map((item, index) => {
          const { id, thumbnail, title, desc } = item;
          return (
            <NutritionCard
              key={index}
              id={id}
              thumbnail={thumbnail}
              title={title}
              desc={desc}
            />
          )
        })}
      </div>
      <div id="avoid" className="title pandangan-title">Pantangan</div>
      <div className="card-container">
        {avoidArray?.map((item, index) => {
          const { id, thumbnail, title, desc } = item;
          return (
            <NutritionCard
              key={index}
              id={id}
              thumbnail={thumbnail}
              title={title}
              desc={desc}
            />
          )
        })}
      </div>

    </Layout>
  );
}

export default NutritionListPage;
