import "../styles/NutritionPage.css";
import BreadCrumb from "../components/BreadCrumb";
import Nutrition from "../components/NutritionRecommend";
import Layout from "../components/Layout";

function NutritionPage() {
  return (
    <Layout>
      <BreadCrumb />
      <Nutrition />
    </Layout>
  );
}

export default NutritionPage;
