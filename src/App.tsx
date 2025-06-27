import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Generate } from "./pages/Generate";
import { Calender } from "./pages/Calender";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/calendar" element={<Calender />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
