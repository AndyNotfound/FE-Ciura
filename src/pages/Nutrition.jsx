import "../styles/NutritionPage.css";
import BreadCrumb from "../components/BreadCrumb";
import Nutrition from "../components/NutritionRecommend";
import Layout from "../components/Layout";

function NutritionPage() {
  return (
    <Layout>
      <BreadCrumb
        list={[
          { path: "/", name: "Beranda" },
          { path: "/nutrition", name: "Nutrisi" }
        ]}
      />
      <Nutrition />
    </Layout>
  );
}

export default NutritionPage;
