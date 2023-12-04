import "../styles/FaqPage.css";
import BreadCrumb from '../components/BreadCrumb'
import { faqArray } from '../utils/data'
import FaqAccordion from "../components/Faq/FaqAccordion";
import Layout from "../components/Layout";

function FaqPage() {
    return (
        <Layout>
            <BreadCrumb />
            <h1 className="faq-header">
                Informasi Anemia
            </h1>
            <p className="faq-desc">Seputar Informasi Umum Anemia</p>
            {faqArray?.map((item, index) => {
                const { id, title, explanation } = item
                return (
                    <FaqAccordion
                        key={index}
                        id={id}
                        title={title}
                        explanation={explanation}
                    />
                )
            })}
        </Layout>
    )
}

export default FaqPage