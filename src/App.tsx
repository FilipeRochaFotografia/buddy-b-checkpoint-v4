import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ProductPage from './pages/ProductPage';
import CapturePage from './pages/CapturePage';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/oferta" element={<CapturePage />} />
        </Routes>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;