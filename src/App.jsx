import { Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import FaqPage from "./pages/Faq";
import ArticlesPage from "./pages/Articles";
import DetailsArticlePage from "./pages/DetailsArticle";
import NutritionPage from "./pages/Nutrition";
import Forum from "./pages/Forum";
import DetailForum from "./pages/DetailForum";
import CreateForum from "./pages/CreateForum";
import ProfilePage from "./pages/Profil";
import Application from "./pages/Application";
import useScrollToTop from "./hooks/useScrollToTop";

function App() {
  useScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/application" element={<Application />} />
      <Route path="/nutrition" element={<NutritionPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:id/:slug" element={<DetailsArticlePage />} />
      <Route path="/forum" element={<Forum />} />
<<<<<<< HEAD
      <Route path="/detailforum" element={<DetailForum />} />
      <Route path="/createforum" element={<CreateForum />} />
      <Route path="/Nutrition" element={<Nutrition />} />
      <Route path="/articles/:title" element={<DetailsArticles />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/application" element={<Application />} />
=======
      <Route path="/forum/:id/:slug" element={<DetailForum />} />
      <Route path="/forum/new" element={<CreateForum />} />
      <Route path="/profile" element={<ProfilePage />} />
>>>>>>> d03e2dde2e6dcbae2a5691ae218ac142b7b3edb1
    </Routes>
  );
}

export default App;
