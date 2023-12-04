import { useParams } from 'react-router-dom';
import Layout from '../components/Layout'
import BreadCrumb from '../components/BreadCrumb'
import { recomendationArray, avoidArray } from '../utils/data';
import NutritionDetailItem from '../components/NutritionDetail/NutritionDetailItem';
import '../styles/DetailNutritionPage.css'

function DetailNutritionPage() {
    const { id } = useParams();

    const nutrition = recomendationArray.find((item) => item.id == id) || avoidArray.find((item) => item.id == id)

    return (
        <Layout>
            <BreadCrumb
                list={[
                    { path: "/", name: "Beranda" },
                    { path: "/nutrition", name: "Nutrisi" },
                    { path: `/nutrition/detail/${id}`, name: nutrition?.title }
                ]}
            />
            <NutritionDetailItem
                thumbnail={nutrition?.thumbnail}
                title={nutrition?.title}
                information={nutrition?.information}
            />

        </Layout>
    )
}

export default DetailNutritionPage