import React from 'react';
import { Helmet } from 'react-helmet-async';

import { UrgencyBanner } from '../sections/capture/UrgencyBanner';
import { HeroCapture } from '../sections/capture/HeroCapture';
import { VideoSection } from '../sections/capture/VideoSection';
import { ValueProposition } from '../sections/capture/ValueProposition';
import { PricingHighlight } from '../sections/capture/PricingHighlight';
import { SocialProof } from '../sections/capture/SocialProof';
import { CTASection } from '../sections/capture/CTASection';
import { RescueSection } from '../sections/capture/RescueSection';
import { AboutSection } from '../sections/capture/AboutSection';
import { FooterCapture } from '../sections/capture/FooterCapture';

const CapturePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Oferta Exclusiva Buddy B - 80% OFF</title>
        <meta name="description" content="Garanta 80% de desconto no plano anual do Buddy B. Oferta de pré-lançamento por tempo limitado." />
      </Helmet>

      <div className="min-h-screen bg-background font-body text-text-title relative overflow-x-hidden">
        
        {/* BANNER */}
        <UrgencyBanner />
        
        {/* HERO */}
        <HeroCapture />
        
        {/* VIDEO */}
        <VideoSection /> 
        
        {/* FEATURES */}
        <ValueProposition />
        
        {/* PRICING */}
        <PricingHighlight />
        
        {/* TESTIMONIALS */}
        <SocialProof />
        
        {/* CTA */}
        <CTASection />
        
        {/* RESCUE FORM */}
        <RescueSection />
        
        {/* ABOUT */}
        <AboutSection />
        
        {/* FOOTER */}
        <FooterCapture />

      </div>
    </>
  );
};

export default CapturePage;