import Layout from '../components/Layout'
import SideMenu from '../components/Sidemenu'
import { articlesArray } from '../utils/data'
import ArticleCard from '../components/ArticleCard'
import '../styles/ProfileArticleListPage.css'

function ProfileArticleListPage() {
    return (
        <Layout>
            <div className="profile-layout">
                <SideMenu />
                <div className="saved-article">
                    <h1>Artikel Tersimpan</h1>
                    <div className="saved-article__container">
                        {articlesArray?.filter((_, index) => index < 2).map((item, index) => {
                            const { id, thumbnail, title, desc, postDate } = item;
                            return (
                                <ArticleCard
                                    key={index}
                                    id={id}
                                    thumbnail={thumbnail}
                                    title={title}
                                    desc={desc}
                                    postDate={postDate}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProfileArticleListPage