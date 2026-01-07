import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { fadeInUp, staggerContainer } from '../../lib/utils';

const heroImages = [
  "/assets/images/producthero1.png",
  "/assets/images/producthero2.png",
  "/assets/images/producthero3.png"
];

export function HeroProduct() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-[#9B80FF]/10">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="w-full max-w-[561px]">
              
              <motion.h1 
                variants={fadeInUp}
                className="font-heading font-bold text-[#424242] text-[40px] leading-[59px]"
              >
                Chega de suposições. <br className="hidden lg:block" />
                Visualize seu fluxo de caixa <br className="hidden lg:block" />
                com clareza total.
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="mt-6 text-lg text-text-body font-body leading-relaxed"
              >
                Tenha acesso ao relatório de <strong>cash flow mais completo do mercado</strong>, direto no seu app. Acompanhe entradas e saídas em tempo real, identifique seus desafios financeiros e tome decisões com mais segurança. Tudo isso integrado às suas contas bancárias, com suporte a múltiplas moedas e idiomas.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-8 w-full flex justify-center lg:justify-start">
                <Link to="/oferta">
                  <Button 
                    variant="primary" 
                    className="w-full sm:w-[305px] h-[54px] text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    Teste grátis por 7 dias
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 relative flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-[500px] lg:h-[600px] max-w-[700px] flex items-center justify-center">
              
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={heroImages[currentImageIndex]} 
                    alt={`Dashboard Buddy B ${currentImageIndex + 1}`} 
                    className="max-h-full max-w-full w-auto h-auto object-contain absolute z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
              </div>

            </div>

            <div className="flex items-center gap-2 mt-4 md:mt-0 z-10 relative">
              {heroImages.map((_, index) => (
                <div 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-primary ring-2 ring-primary ring-offset-2' 
                      : 'bg-[#D1D5DB]'
                  }`}
                />
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}