import { useNavigate } from "react-router-dom"
import Layout from "../components/Layout"
import SideMenu from "../components/Sidemenu"
import '../styles/ProfileForumListPage.css'
import { forumQuestion } from "../utils/data";
import SavedForumCard from "../components/ProfileForum/SavedForumCard";

function ProfileForumListPage() {
    const navigate = useNavigate();
    return (
        <Layout>
            <div className="profile-layout">
                <SideMenu />
                <div className="saved-forum">
                    <div className="saved-forum__header">
                        <h1>Forum Diskusi</h1>
                        <button onClick={() => navigate("/forums/new")}>Buat Forum</button>
                    </div>
                    <div className="saved-forum__container">
                        {forumQuestion?.filter((_, index) => index <= 2).map((item, index) => {
                            const { id, title, authorProfilePicture, postedDate, question, comments } = item;
                            return (
                                <SavedForumCard
                                    key={index}
                                    id={id}
                                    title={title}
                                    authorProfilePicture={authorProfilePicture}
                                    postedDate={postedDate}
                                    question={question}
                                    comments={comments}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProfileForumListPage