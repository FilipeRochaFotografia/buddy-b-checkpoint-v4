import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CapturePage from './pages/CapturePage';
import TermosDeUsoPage from './pages/TermosDeUso';
import PoliticaPrivacidadePage from './pages/PoliticaPrivacidade';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/oferta" element={<CapturePage />} />
        <Route path="/termos-de-uso" element={<TermosDeUsoPage />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidadePage />} />
      </Routes>
    </Router>
  );
}

export default App;