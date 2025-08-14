import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SobrePage from "./pages/AboutPage";
import ContatoPage from "./pages/ContactPage";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function App() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+5521964903632"
        accountName="Radar"
        statusMessage="Saúde Seguros & Previdência"
        chatMessage="Olá! 🤝 Como podemos ajudar?"
        placeholder="Digite uma mensagem..."
        avatar="logo192.png"
      />

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
