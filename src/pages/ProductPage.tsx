import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavbarProduct } from '../components/layout/Navbar/NavbarProduct';

import { HeroProduct } from '../sections/product/HeroProduct';
import { FeaturesGrid } from '../sections/product/FeaturesGrid';
import { MobileShowcase } from '../sections/product/MobileShowCase';
import { PricingGeneral } from '../sections/product/PricingGeneral';
import { BlogPreview } from '../sections/product/BlogPreview';
import { TestimonialsGeneral } from '../sections/product/TestimonialsGeneral';
import { DownloadApp } from '../sections/product/DownloadApp';
import { FooterProduct } from '../sections/product/FooterProduct';


import { CookieConsent } from '../components/ui/CookieConsent';

const ProductPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Buddy B - Controle Financeiro Inteligente</title>
        <meta name="description" content="Chega de suposições. Visualize seu fluxo de caixa com clareza total com o Buddy B." />
      </Helmet>

      <div className="bg-background min-h-screen font-body text-text-title overflow-x-hidden relative">
        
        <NavbarProduct />
        <HeroProduct />
        <FeaturesGrid />
        <MobileShowcase />
        <PricingGeneral />
        <BlogPreview />
        <TestimonialsGeneral />
        <DownloadApp />
        <FooterProduct />

        {/* COMPONENTE DE COOKIES */}
        <CookieConsent />

      </div>
    </>
  );
};

export default ProductPage;