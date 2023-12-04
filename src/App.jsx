import { Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import FaqPage from "./pages/Faq";
import ArticleListPage from "./pages/Articles";
import DetailArticlePage from "./pages/DetailArticle";
import NutritionListPage from "./pages/Nutrition";
import ForumListPage from "./pages/Forum";
import DetailForum from "./pages/DetailForum";
import CreateForum from "./pages/CreateForum";
import ProfilePage from "./pages/Profil";
import Application from "./pages/Application";
import useScrollToTop from "./hooks/useScrollToTop";
import DetailNutritionPage from "./pages/DetailNutrition";

function App() {
  useScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/application" element={<Application />} />
      <Route path="/nutrition" element={<NutritionListPage />} />
      <Route path="/nutrition/detail/:id" element={<DetailNutritionPage />} />
      <Route path="/articles" element={<ArticleListPage />} />
      <Route path="/articles/:id/:slug" element={<DetailArticlePage />} />
      <Route path="/forums" element={<ForumListPage />} />
      <Route path="/forums/:id/:slug" element={<DetailForum />} />
      <Route path="/forums/new" element={<CreateForum />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
