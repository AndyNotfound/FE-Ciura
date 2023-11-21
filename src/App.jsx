import { Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import "./styles/beranda-login.css";
import "./styles/login.css";
import "./styles/daftar.css";
import "./styles/cekgejala.css";
import HomePage from "./pages/Home";
import CheckSymptoms from "./pages/CheckSymptoms";
import HomeLogin from "./pages/Home-Login";
import Login from "./pages/login";
import Daftar from "./pages/daftar";
import CekGejala from "./pages/CekGejala";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/symptoms" element={<CheckSymptoms />} />
      <Route path="/HomeLogin" element={<HomeLogin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Daftar" element={<Daftar />} />
      <Route path="/cekgejala" element={<CekGejala />} />
    </Routes>
  );
}

export default App;
