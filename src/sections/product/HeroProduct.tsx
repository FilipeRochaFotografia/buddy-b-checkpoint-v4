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
    /* Hero Section */
    <section className="relative pt-[120px] pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-[#9B80FF]/10">
      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Content */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col items-center lg:items-start text-left lg:text-left"
          >
            <div className="flex flex-col items-center lg:items-start">
              
              <motion.h1 
                variants={fadeInUp}
                className="font-heading font-bold text-[#424242] 
                text-[30px] leading-[41px] w-[353px] max-w-full text-left
                lg:text-[40px] lg:leading-[59px] lg:w-[561px]
                mb-6"
              >
                Chega de suposições. Visualize seu fluxo de caixa com clareza total.
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="font-body font-normal text-[#424242] 
                text-[20px] leading-[27px] text-justify
                w-[347px] max-w-full
                lg:w-[580px] 
                mb-8"
              >
                Tenha acesso ao relatório de <strong>cash flow mais completo do mercado</strong>, direto no seu app. Acompanhe entradas e saídas em tempo real, identifique seus desafios financeiros e tome decisões com mais segurança. Tudo isso integrado às suas contas bancárias, com suporte a múltiplas moedas e idiomas.
              </motion.p>

              <motion.div variants={fadeInUp} className="w-full flex justify-center lg:justify-start">
                <Link to="/oferta">
                  <Button 
                    variant="primary" 
                    className="w-[350px] max-w-full lg:w-[305px] h-[54px] text-[18px] font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
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

          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center justify-center"
          >
            <div className="relative w-[340px] h-[390px] lg:w-full lg:h-[580px] lg:max-w-[680px] flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={heroImages[currentImageIndex]} 
                    alt="Dashboard"
                    className="max-h-full max-w-full w-auto h-auto object-contain absolute z-10 drop-shadow-2xl rounded-[12px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6 lg:mt-0 z-10 relative">
              {heroImages.map((_, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'w-8 bg-[#9B80FF]' 
                      : 'w-3 border-2 border-[#9B80FF] bg-transparent'
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