import React from 'react';
import { Helmet } from 'react-helmet-async';

// Seções de Conversão (Importadas na ordem lógica do funil)
import { UrgencyBanner } from '../sections/capture/UrgencyBanner';
import { HeroCapture } from '../sections/capture/HeroCapture';
import { VideoSection } from '../sections/capture/VideoSection';
import { ValueProposition } from '../sections/capture/ValueProposition';
import { PricingHighlight } from '../sections/capture/PricingHighlight';
import { SocialProof } from '../sections/capture/SocialProof';
import { CTASection } from '../sections/capture/CTASection';
import { RescueSection } from '../sections/capture/RescueSection';

// Seções Institucionais
import { AboutSection } from '../sections/capture/AboutSection';
import { FooterCapture } from '../sections/capture/FooterCapture';

const CapturePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Oferta Exclusiva Buddy B - 80% OFF</title>
        <meta name="description" content="Garanta 80% de desconto no plano anual do Buddy B. Oferta de pré-lançamento por tempo limitado." />
      </Helmet>

      {/* overflow-x-hidden previne rolagem horizontal indesejada por animações */}
      <div className="min-h-screen bg-background font-body text-text-title relative overflow-x-hidden">
        
        {/* 1. Topo: Urgência (Marquee) */}
        <UrgencyBanner />
        
        {/* 2. Hero: Captura Principal (Roxo com Imagem) */}
        <HeroCapture />
        
        {/* 3. Vídeo: Retenção (Branco) */}
        <VideoSection /> 
        
        {/* 4. Funcionalidades: Educação (Cinza/Roxo) */}
        <ValueProposition />
        
        {/* 5. Preço: Oferta (Lilás/Branco) */}
        <PricingHighlight />
        
        {/* 6. Prova Social: Confiança (Antes do fechamento final) */}
        <SocialProof />
        
        {/* 7. CTA Intermediário: "Risco Zero" (Leva para o Rescue) */}
        <CTASection />
        
        {/* 8. Resgate: Última Chance (Onde o CTA acima ancora) */}
        <RescueSection />
        
        {/* 9. Institucional (Dark) */}
        <AboutSection />
        
        {/* 10. Rodapé (Dark) */}
        <FooterCapture />

      </div>
    </>
  );
};

export default CapturePage;