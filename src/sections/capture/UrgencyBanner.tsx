import React from 'react';
import { motion } from 'framer-motion';

export function UrgencyBanner() {
  // Função para rolar suavemente até o formulário ao clicar
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ícone de Fogo (SVG Inline)
  const FireIcon = () => (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" className="mx-2 mb-0.5">
      <path d="M7.00008 0.666656C7.00008 0.666656 7.61675 3.39332 9.40008 4.73332C11.3917 6.22999 13.0667 5.76666 13.0667 5.76666C13.0667 5.76666 13.5251 9.42666 11.2001 12.16C9.28341 14.4133 6.90841 15.22 5.09175 14.5933C3.27508 13.9667 2.15841 12.06 2.37508 10.3333C2.37508 10.3333 0.933415 11.4667 0.933415 13.3333C0.933415 13.3333 0 12.1133 0 10C0 6.66666 3.73341 5.33332 3.73341 5.33332C3.73341 5.33332 3.00841 3.29999 4.86675 1.99999C6.00008 1.20666 7.00008 0.666656 7.00008 0.666656Z" fill="#FFD400"/>
    </svg>
  );

  // Texto repetido para o loop
  const textBlock = (
    <div className="flex items-center mx-4 group-hover:opacity-100 transition-opacity">
      <FireIcon />
      <span className="text-white font-bold tracking-wider text-xs md:text-sm uppercase font-heading">
        OFERTA PRÉ-LANÇAMENTO <span className="text-primary mx-1">•</span> 80% OFF VITALÍCIO PREMIUM <span className="text-primary mx-1">•</span>
      </span>
    </div>
  );

  return (
    <a 
      href="#formulario" 
      onClick={handleClick}
      className="block bg-[#121212] py-3 overflow-hidden sticky top-0 z-50 border-b border-white/5 shadow-lg cursor-pointer group hover:bg-black transition-colors duration-300"
    >
      <div className="relative flex whitespace-nowrap">
        <motion.div 
          className="flex items-center"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 100, // AJUSTADO: Muito mais lento (Drift suave)
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {/* Renderiza múltiplos blocos para garantir o loop sem buracos */}
          {[...Array(20)].map((_, i) => (
            <React.Fragment key={i}>
              {textBlock}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </a>
  );
}