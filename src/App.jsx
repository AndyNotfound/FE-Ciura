import { Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import "./styles/beranda-login.css";
import "./styles/login.css";
import "./styles/daftar.css";
import "./styles/cekgejala.css";
import HomePage from "./pages/Home";
import CheckSymptomsPage from "./pages/CheckSymptoms";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import ArticlesPage from "./pages/Articles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/symptoms" element={<CheckSymptomsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
    </Routes>
  );
}

export default App;
