import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Páginas
import ProductPage from './pages/ProductPage';
import CapturePage from './pages/CapturePage';
import TermosDeUsoPage from './pages/TermosDeUso';
import PoliticaPrivacidadePage from './pages/PoliticaPrivacidade';

// Componentes
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* --- ROTA PRINCIPAL --- */}
          {/* Agora a raiz aponta para o Site Institucional (ProductPage) */}
          <Route path="/" element={<ProductPage />} />

          {/* --- ROTA DE OFERTA --- */}
          {/* Landing Page de Captura acessível via /#/oferta */}
          <Route path="/oferta" element={<CapturePage />} />

          {/* --- INSTITUCIONAIS --- */}
          <Route path="/termos-de-uso" element={<TermosDeUsoPage />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidadePage />} />
        </Routes>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;