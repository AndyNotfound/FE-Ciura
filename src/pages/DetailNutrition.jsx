import { useParams } from 'react-router-dom';
import Layout from '../components/Layout'
import BreadCrumb from '../components/BreadCrumb'

function DetailNutritionPage() {
    const { id } = useParams();

    return (
        <Layout>
            <BreadCrumb
                list={[
                    { path: "/", name: "Beranda" },
                    { path: "/nutrition", name: "Nutrisi" },
                    { path: `/nutrition/detail/${id}`, name: "something" }
                ]}
            />
        </Layout>
    )
}

export default DetailNutritionPage