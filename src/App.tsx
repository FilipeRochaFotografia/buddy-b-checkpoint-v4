import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Componentes Utilitários
import ScrollToTop from './components/ScrollToTop';

// Páginas Principais
import ProductPage from './pages/ProductPage';
import CapturePage from './pages/CapturePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import FAQPage from './pages/FAQPage'; // Importação da FAQ

// Páginas Institucionais
import TermosDeUsoPage from './pages/TermosDeUso';
import PoliticaPrivacidadePage from './pages/PoliticaPrivacidade';
import PoliticaCookiesPage from './pages/PoliticaCookies';

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

          {/* --- BLOG --- */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />

          {/* --- FAQ --- */}
          <Route path="/faq" element={<FAQPage />} />

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