import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/utils';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  // ID do vídeo (Substitua aqui)
  const VIDEO_ID = "rKYyE0Qtdx0"; 

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-title mb-4"
          >
            Controle financeiro na <span className="text-primary">palma da mão</span>
          </motion.h2>
          <p className="text-lg text-text-body font-body">
            Além de todas as funcionalidades citadas, o Buddy B oferece um grande diferencial: o Fluxo de Caixa. Com ele, você acompanha entradas e saídas, projeta seus próximos meses e toma decisões com mais clareza.
<br/> Confira no vídeo abaixo como essa função pode facilitar sua rotina financeira:
          </p>
        </div>

        {/* VIDEO CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-primary rounded-[40px] blur-3xl opacity-10 pointer-events-none"></div>

          {/* Frame */}
          <div className="relative rounded-[24px] overflow-hidden shadow-2xl bg-white aspect-video border-4 border-white z-10">
            
            {!isPlaying ? (
              /* THUMBNAIL */
              <div 
                className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer group bg-gray-50/30"
                onClick={() => setIsPlaying(true)}
              >
                <div className="flex flex-col items-center justify-center gap-1 md:gap-8 w-full h-full">
                    
                    {/* Logo */}
                    <img 
                      src="/assets/Logo2.png" 
                      alt="Buddy B" 
                      className="h-24 md:h-48 w-auto opacity-100 transition-transform duration-500 group-hover:scale-105" 
                    />
                    
                    {/* Play Button & Text */}
                    <div className="flex flex-col items-center gap-1.5 md:gap-6">
                      <div className="relative">
                        <span className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-150 transition-transform duration-700"></span>
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 relative z-10">
                          <svg width="18" height="22" viewBox="0 0 24 28" fill="none" className="ml-1 md:w-5 md:h-6">
                            <path d="M22.5 11.4019C24.5 12.5566 24.5 15.4434 22.5 16.5981L4.5 26.9904C2.5 28.1451 -5.02389e-07 26.7017 -4.01407e-07 24.3923L5.07221e-07 3.60769C6.08203e-07 1.29829 2.5 -0.14507 4.5 1.00962L22.5 11.4019Z" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>

                      <p className="text-[10px] md:text-xs font-bold text-primary/60 uppercase tracking-[0.2em]">
                        Assista a demonstração
                      </p>
                    </div>

                </div>
              </div>
            ) : (
              /* PLAYER */
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&showinfo=0`}
                title="Buddy B Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}