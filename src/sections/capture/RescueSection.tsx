import React from 'react';
import { motion } from 'framer-motion';
import LeadForm from '../../components/form/LeadForm';
import { fadeInUp, staggerContainer } from '../../lib/utils';

export function RescueSection() {
  
  // Componente interno dos Badges
  const SecurityBadges = () => (
    <motion.div 
      variants={fadeInUp}
      className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-80 hover:opacity-100 transition-opacity"
    >
      <div className="flex items-center gap-2 group cursor-default">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:scale-110 transition-transform"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        <span className="text-[10px] font-bold text-white uppercase tracking-wide">Pagamento Seguro</span>
      </div>
      <div className="flex items-center gap-2 group cursor-default">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:scale-110 transition-transform"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span className="text-[10px] font-bold text-white uppercase tracking-wide">Dados Protegidos</span>
      </div>
      <div className="flex items-center gap-2 group cursor-default">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:scale-110 transition-transform"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
        <span className="text-[10px] font-bold text-white uppercase tracking-wide">Acesso Imediato</span>
      </div>
    </motion.div>
  );

  return (
    // ID "resgate" ADICIONADO PARA O SCROLL DO CTA
    <section id="resgate" className="py-20 md:py-24 bg-gradient-to-br from-[#583CE3] to-[#9B80FF] relative overflow-hidden">
      
      {/* Elementos de Fundo Animados */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4 mix-blend-overlay" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#583CE3]/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/4 mix-blend-multiply" 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LADO ESQUERDO: O FORMULÁRIO (Card) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 lg:order-1 order-2 flex flex-col items-center lg:items-start"
          >
            
            {/* Card Branco com Efeito de Elevação */}
            <div className="relative w-full max-w-md bg-white rounded-[20px] shadow-2xl p-6 md:p-8 transform transition-transform hover:scale-[1.01] duration-500">
                <div className="text-center mb-6">
                   <p className="text-xs font-bold text-[#9B80FF] uppercase tracking-widest mb-1 animate-pulse">Última chance</p>
                   <h3 className="text-2xl font-heading font-bold text-[#424242]">Garanta 80% OFF</h3>
                </div>
                <LeadForm showTitle={false} />
            </div>

            {/* BADGES MOBILE */}
            <div className="mt-8 lg:hidden">
              <SecurityBadges />
            </div>

          </motion.div>

          {/* LADO DIREITO: TEXTO E ARGUMENTOS */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-7 lg:order-2 order-1 text-center lg:text-left lg:pl-8 flex flex-col items-center lg:items-start"
          >
            
            {/* LOGO */}
            <motion.div variants={fadeInUp} className="mb-6">
              <img 
                src="/assets/Logo1.png" 
                alt="Buddy B" 
                className="h-16 md:h-20 w-auto brightness-0 invert drop-shadow-lg opacity-100" 
              />
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              O risco é todo <span className="text-[#FFD400]">nosso</span>.
            </motion.h2>
            
            {/* TEXTO */}
            <motion.div variants={fadeInUp} className="text-lg md:text-xl text-white/90 font-body mb-8 leading-relaxed">
              <p>Você não precisa decidir agora.</p>
              <p>Garanta sua vaga com <strong className="text-white">80% de desconto</strong></p>
              <p>E teste na prática a mágica do Buddy B.</p>
            </motion.div>

            {/* Box de Garantia */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="hidden md:inline-flex bg-white rounded-[20px] p-6 shadow-lg flex-col md:flex-row items-center gap-4 mb-10 text-left cursor-default"
            >
              <div className="w-12 h-12 bg-[#20CE66]/10 rounded-full flex items-center justify-center shrink-0 mx-auto md:mx-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#20CE66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-[#424242] mb-0.5 font-heading">Garantia Incondicional de 7 Dias</h3>
                <p className="text-sm text-[#666666] leading-snug">
                  Devolvemos 100% do seu dinheiro. Sem perguntas.
                </p>
              </div>
            </motion.div>

            {/* BADGES DESKTOP */}
            <div className="hidden lg:block w-full">
              <div className="flex justify-start">
                 <SecurityBadges />
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}