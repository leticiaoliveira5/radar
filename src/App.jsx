import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SobrePage from "./pages/AboutPage";
import ContatoPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/sobre" style={{ marginRight: "1rem" }}>Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
    </div>
  );
}

export default App;
