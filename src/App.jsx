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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/nutrition" element={<NutritionPage />} />
      <Route path="/articles/:title" element={<DetailsArticlePage />} />
    </Routes>
  );
}

export default App;
