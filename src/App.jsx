import { Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import HomePage from "./pages/Home";
import "./styles/HomePage.css";
import LoginPage from "./pages/Login";
import "./styles/LoginPage.css";
import SignUpPage from "./pages/SignUp";
import "./styles/SignUpPage.css";
import CheckSymptomsPage from "./pages/CheckSymptoms";
import "./styles/CheckSymptomsPage.css";
import ArticlesPage from "./pages/Articles";
import "./styles/ArticlesPage.css";
import DetailsArticles from "./pages/DetailsArticle";
import "./styles/DetailsArticlePage.css";
import Nutrition from "./pages/Nutrition";
import "./styles/NutritionRecommend.css";
import Forum from "./pages/forum";
import "./styles/ForumPage.css";
import DetailForum from "./pages/DetailForum";
import "./styles/DetailsForumPage.css";
import CreateForum from "./pages/CreateForum";
import "./styles/CreateForumPage.css";
import Profil from "./pages/Profil";
import "./styles/ProfilPage.css";
import Application from "./pages/Application";
import "./styles/ApplicationPage.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/symptoms" element={<CheckSymptomsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/detailforum" element={<DetailForum />} />
      <Route path="/createforum" element={<CreateForum />} />
      <Route path="/Nutrition" element={<Nutrition />} />
      <Route path="/articles/:title" element={<DetailsArticles />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/application" element={<Application />} />
    </Routes>
  );
}

export default App;
