import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Componentes Utilitários
import ScrollToTop from './components/ScrollToTop';

// Páginas Principais
import ProductPage from './pages/ProductPage';
import CapturePage from './pages/CapturePage';

// Páginas Institucionais
import TermosDeUsoPage from './pages/TermosDeUso';
import PoliticaPrivacidadePage from './pages/PoliticaPrivacidade';
import PoliticaCookiesPage from './pages/PoliticaCookies'; // Nova Página

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* --- ROTA PRINCIPAL (HOME) --- */}
          <Route path="/" element={<ProductPage />} />

          {/* --- ROTA DE OFERTA (LANDING PAGE) --- */}
          <Route path="/oferta" element={<CapturePage />} />

          {/* --- INSTITUCIONAIS --- */}
          <Route path="/termos-de-uso" element={<TermosDeUsoPage />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidadePage />} />
          <Route path="/politica-cookies" element={<PoliticaCookiesPage />} />
        </Routes>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;