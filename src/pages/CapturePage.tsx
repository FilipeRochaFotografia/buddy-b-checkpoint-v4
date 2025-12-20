import React from 'react';
import { Helmet } from 'react-helmet-async';
import { UrgencyBanner } from '../sections/capture/UrgencyBanner';
import { HeroCapture } from '../sections/capture/HeroCapture';
import { VideoSection } from '../sections/capture/VideoSection';
import { ValueProposition } from '../sections/capture/ValueProposition';
import { PricingHighlight } from '../sections/capture/PricingHighlight';
import { RescueSection } from '../sections/capture/RescueSection';
import { SocialProof } from '../sections/capture/SocialProof';
import { CTASection } from '../sections/capture/CTASection';
import { AboutSection } from '../sections/capture/AboutSection';
import { FooterCapture } from '../sections/capture/FooterCapture';

const CapturePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Oferta Exclusiva Buddy B - 80% OFF</title>
        <meta name="description" content="Garanta 80% de desconto no plano anual do Buddy B." />
      </Helmet>

      <div className="min-h-screen bg-background font-body text-text-title relative">
        
        {/* 1. Barra de Urgência */}
        <UrgencyBanner />
        
        {/* REMOVIDO: O Header Flutuante que causava o logo duplo/mini */}
        
        {/* 2. Hero Section (Já contém o Logo internamente) */}
        <HeroCapture />
        
        <VideoSection /> 
        <ValueProposition />
        <PricingHighlight />
        <RescueSection />
        <SocialProof />
        
        <CTASection />
        <AboutSection />
        <FooterCapture />

      </div>
    </>
  );
};

export default CapturePage;