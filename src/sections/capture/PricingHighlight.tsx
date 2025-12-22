import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Animações (Inline para garantir funcionamento) ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- Ícones Inline ---
const Icons = {
  Check: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Star: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Shield: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Zap: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Crown: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>,
  Gift: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
};

export function PricingHighlight() {
  const [plan, setPlan] = useState<'standard' | 'smart'>('smart');
  const isSmart = plan === 'smart';

  const scrollToForm = () => {
    const form = document.getElementById('formulario');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const theme = {
    cardBg: isSmart 
      ? 'bg-gradient-to-br from-[#9B80FF] to-[#583CE3] shadow-[0_20px_50px_rgba(155,128,255,0.4)] border-white/20' 
      : 'bg-gradient-to-br from-white to-[#E8E9EA] shadow-xl border-gray-200',
    
    badgeBg: isSmart ? 'bg-[#FFD400] text-[#424242]' : 'bg-gray-200 text-gray-500',
    textColor: isSmart ? 'text-white' : 'text-[#424242]',
    subText: isSmart ? 'text-purple-100' : 'text-gray-500',
    buttonBg: isSmart ? 'bg-white text-[#583CE3]' : 'bg-[#424242] text-white',
    iconColor: isSmart ? 'text-[#20CE66]' : 'text-[#424242]',
  };

  const annualFeatures = [
    "Pagamento único (sem mensalidade)",
    "Único com Fluxo de Caixa",
    "Controle seus cartões de crédito",
    "Integração bancária (ilimitada)",
    "Conexão via Open Finance",
    "Multimoeda",
    "Categorize suas finanças"
  ];

  const monthlyFeatures = [
    "Assinatura Mensal",
    "Fluxo de caixa inteligente e automático",
    "Gestão completa de cartões de crédito",
    "Integração bancária segura via Open Finance",
    "Suporte a múltiplas moedas",
    "Organização e categorização financeira"
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#F8F9FA] to-[#F0EBFF] relative overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vw] bg-[#9B80FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#583CE3]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-[#424242] mb-3 transition-colors duration-300">
            Escolha <span className={isSmart ? "text-[#9B80FF]" : "text-[#424242]"}>inteligente</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base text-[#666666] max-w-xxl mx-auto">
            Veja a diferença de valor entre o plano mensal e a nossa oferta de pré-lançamento.
          </motion.p>
        </motion.div>

        {/* TOGGLE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white p-1 rounded-full flex items-center shadow-lg border border-gray-100 relative">
            
            <button 
              onClick={() => setPlan('standard')}
              className={`
                relative px-5 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 z-10 font-heading
                ${!isSmart ? 'text-white' : 'text-[#666666] hover:text-[#9B80FF]'}
              `}
            >
              {!isSmart && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-[#424242] rounded-full -z-10 shadow-md"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              Plano Mensal
            </button>

            <button 
              onClick={() => setPlan('smart')}
              className={`
                relative px-5 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 z-10 flex items-center gap-2 font-heading
                ${isSmart ? 'text-[#424242]' : 'text-[#666666] hover:text-[#9B80FF]'}
              `}
            >
              {isSmart && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-[#FFD400] rounded-full -z-10 shadow-md"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              Plano Anual
              <span className={`text-[10px] px-2 py-0.5 rounded-full shadow-sm font-extrabold ${isSmart ? 'bg-white/30 text-[#424242]' : 'bg-[#20CE66] text-white'}`}>
                -80% OFF
              </span>
            </button>
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center justify-center max-w-6xl mx-auto px-4 perspective-[1000px]">
          
          {/* PRICING CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-20 order-1 flex justify-center md:justify-end"
          >
             <AnimatePresence mode="wait">
              <motion.div 
                key={plan}
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`
                  ${theme.cardBg}
                  rounded-[2rem] p-6 border-4
                  flex flex-col items-center text-center transform-gpu
                  w-full max-w-[380px]
                `}
              >
                {/* Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`px-5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-md mb-6 ${theme.badgeBg}`}
                >
                  {isSmart ? '⚡ Oferta Especial' : 'Plano Padrão'}
                </motion.div>

                {/* Content */}
                <div className="w-full">
                    <p className={`font-heading font-bold text-xs uppercase tracking-[0.2em] mb-2 opacity-80 ${theme.textColor}`}>
                      {isSmart ? 'BUDDY B SMART' : 'BUDDY B STANDARD'}
                    </p>
                    
                    <div className="mb-6">
                      {isSmart ? (
                        <div className="flex flex-col items-center">
                          <span className="text-sm text-purple-200 line-through decoration-white/50 font-medium mb-1 font-body">
                            De R$ 399,99/ano
                          </span>
                          <div className="flex items-baseline gap-1 font-body">
                            <span className="text-2xl font-medium text-white/90">R$</span>
                            <span className="text-6xl font-extrabold tracking-tighter text-white drop-shadow-lg">6,69</span>
                            <span className="text-lg font-medium text-white/90">/mês</span>
                          </div>
                          <p className="text-[10px] text-[#424242] mt-2 font-bold bg-[#FFD400] px-3 py-1 rounded-full inline-block shadow-sm font-heading">
                            Total de R$ 79,99/ano
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <div className="flex items-baseline gap-1 font-body">
                            <span className="text-2xl font-medium text-gray-400">R$</span>
                            <span className="text-6xl font-extrabold tracking-tighter text-[#424242]">39,99</span>
                            <span className="text-lg font-medium text-gray-400">/mês</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* List */}
                    <div className="space-y-3 w-full text-left bg-black/5 rounded-xl p-4 mb-6">
                       <ul className={`space-y-2.5 text-xs font-semibold ${theme.textColor}`}>
                          {(isSmart ? annualFeatures : monthlyFeatures).map((item, index) => (
                            <li key={index} className="flex gap-2 items-center">
                               <div className={`${theme.iconColor} shrink-0`}><Icons.Check /></div>
                               <span className="font-body">{item}</span>
                            </li>
                          ))}
                       </ul>
                    </div>
                </div>

                <motion.button 
                  onClick={scrollToForm}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3.5 rounded-xl font-extrabold text-base shadow-xl flex items-center justify-center gap-2 group relative overflow-hidden font-heading ${theme.buttonBg}`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSmart ? 'QUERO ECONOMIZAR' : 'Assinar Mensal'}
                    {isSmart && <Icons.Zap />}
                  </span>
                  {isSmart && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity transform -skew-x-12" />
                  )}
                </motion.button>

              </motion.div>
             </AnimatePresence>
          </motion.div>

          {/* BENEFÍCIOS CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="order-2 flex justify-center md:justify-start"
          >
            <div className="relative bg-white border border-gray-100 p-6 rounded-[1.5rem] shadow-lg flex flex-col justify-center w-full max-w-[320px]">
              
              <h3 className="text-lg font-heading font-bold text-[#424242] mb-8 leading-tight text-center">
                Vantagens de assinar o Buddy B no Pré lançamento
              </h3>
              
              <div className="flex flex-col gap-4">
                 
                 <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                      <Icons.Zap />
                    </div>
                    <div>
                      <h4 className="font-normal text-[#424242] text-xs font-body">Garanta 80% de desconto</h4>
                    </div>
                 </div>

                 <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                      <Icons.Gift />
                    </div>
                    <div>
                      <h4 className="font-normal text-[#424242] text-xs font-body">Concorra a prêmios de R$1.000,00¹</h4>
                    </div>
                 </div>

                 <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-primary shrink-0">
                      <Icons.Star />
                    </div>
                    <div>
                      <h4 className="font-normal text-[#424242] text-xs font-body">Desconto na renovação do seu planos¹</h4>
                    </div>
                 </div>

                 <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                      <Icons.Shield />
                    </div>
                    <div>
                      <h4 className="font-normal text-[#424242] text-xs font-body">Upgrade de planos sem custos¹</h4>
                    </div>
                 </div>
              </div>

              <div className="mt-5 p-2.5 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center gap-2">
                 <div className="flex text-[#FFD400]">
                   <Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star />
                 </div>
                 <span className="text-xs font-bold text-[#424242]">Satisfação Garantida</span>
              </div>

              <p className="text-[9px] text-gray-400 mt-4 text-center leading-tight">
                ¹Termos e condições para os benefícios do pré-lançamento podem ser encontrados nos termos de uso do Buddy B ou em nossas redes sociais.
              </p>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}