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
        {/* --- ESTRATÉGIA DE LANÇAMENTO --- */}
        
        {/* 1. A Raiz agora abre direto a Página de Oferta/Captura */}
        <Route path="/" element={<CapturePage />} />
        
        {/* 2. Mantém /oferta funcionando também */}
        <Route path="/oferta" element={<CapturePage />} />
        
        {/* 3. A Página do Produto fica oculta/comentada para o público não acessar agora */}
        {/* <Route path="/produto-home" element={<ProductPage />} /> */}

        {/* 4. Páginas Institucionais */}
        <Route path="/termos-de-uso" element={<TermosDeUsoPage />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidadePage />} />
      </Routes>
    </Router>
  );
}

export default App;