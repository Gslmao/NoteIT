import { Routes, Route } from "react-router-dom";
import LoginPage from "./auth/login/page.jsx";
import NotesPage from "./home/page.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<NotesPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}
