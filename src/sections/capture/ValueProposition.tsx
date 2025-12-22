import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const showcaseImages = [
  "/assets/images/23.png",
  "/assets/images/24.png",
  "/assets/images/25.png",
  "/assets/images/26.png",
  "/assets/images/27.png",
  "/assets/images/28.png"
];

const features = [
  { 
    id: 1, 
    text: (
      <>
        O <span className="font-bold text-primary">Único</span> aplicativo com <br/> 
        <span className="font-bold">Fluxo de Caixa Integrado!</span>
      </>
    )
  },
  { 
    id: 2, 
    text: (
      <>
        <span className="font-bold">Conexão bancária:</span> <br/>
        Conecta automaticamente suas contas e cartões
      </>
    )
  },
  { 
    id: 3, 
    text: (
      <>
        <span className="font-bold text-primary">Muito mais</span> que uma <br/>
        simples planilha!
      </>
    )
  },
  { 
    id: 4, 
    text: (
      <>
        Interface <span className="font-bold">Intuitiva</span> e <br/>
        fácil de usar
      </>
    )
  },
  { 
    id: 5, 
    text: (
      <>
        Gráficos <span className="font-bold text-primary">dinâmicos</span> e <br/>
        análises <span className="font-bold">detalhadas</span>
      </>
    )
  },
  { 
    id: 6, 
    text: (
      <>
        Acompanhamento <br/>
        de <span className="font-bold">Assinaturas</span> e <span className="font-bold">Contas Fixas</span>
      </>
    )
  }
];

export function ValueProposition() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(features.length / itemsPerPage);

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  /* AUTO-PLAY IMAGES (4s) */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* AUTO-PLAY CARDS (4s) */
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentFeatures = features.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-[#F8F9FA] relative overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] bg-[#9B80FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#583CE3]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#424242] mb-4 leading-tight">
            O que você vai <span className="text-[#9B80FF]">encontrar</span>
          </h2>
          <p className="text-base md:text-lg text-[#666666] font-body font-light">
            Um jeito simples e fácil de organizar seu dinheiro, controlar gastos, acompanhar seu fluxo de caixa e planejar seu futuro financeiro, tudo em um só lugar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT: MOCKUPS */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
             <div className="relative w-full max-w-2xl h-[350px] md:h-[600px] flex items-center justify-center">
                
                <div className="absolute inset-0 bg-primary/5 blur-[60px] md:blur-[80px] rounded-full scale-90 -z-10"></div>
                
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImgIndex}
                    src={showcaseImages[currentImgIndex]} 
                    alt="App Interface" 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full h-full object-contain drop-shadow-2xl absolute"
                  />
                </AnimatePresence>

             </div>
          </div>

          {/* RIGHT: CARDS */}
          <div className="order-1 lg:order-2 flex flex-col justify-center h-full">
            
            <div className="relative min-h-[340px] md:min-h-[420px] flex flex-col justify-center w-full max-w-[380px] mx-auto lg:mx-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-3 md:space-y-4"
                >
                  {currentFeatures.map((feature, idx) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white border border-purple-100 p-4 md:p-5 rounded-[16px] shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-x-1 flex items-center h-[90px] md:h-[100px]"
                    >
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-1.5 h-10 md:h-12 bg-gradient-to-b from-primary to-gray-200 rounded-full shrink-0"></div>
                        <p className="text-[#424242] text-sm md:text-lg leading-tight font-body">
                          {feature.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* NAVIGATION */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-4 md:mt-6 w-full max-w-[380px] mx-auto lg:mx-0">
              <button 
                onClick={prevPage}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:bg-white hover:shadow-md transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              </button>
              
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === page ? 'bg-primary w-6' : 'bg-gray-300'}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextPage}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:bg-white hover:shadow-md transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}