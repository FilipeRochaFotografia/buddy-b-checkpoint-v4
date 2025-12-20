import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Ícones Inline ---
const Icons = {
  Check: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Star: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Shield: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Zap: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Crown: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>
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

  return (
    // AJUSTE 1: Degradê Roxo Claro no fundo da seção
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#F8F9FA] to-[#F0EBFF] relative overflow-hidden">
      
      {/* Background Decorativo (Ajustado para roxo) */}
      <div className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vw] bg-[#9B80FF]/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Alterado de Verde para Roxo Escuro/Azulado para manter o tom */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#583CE3]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#424242] mb-3 transition-colors duration-300">
            Escolha <span className={isSmart ? "text-[#9B80FF]" : "text-[#424242]"}>inteligente</span>
          </h2>
          <p className="text-base text-[#666666] max-w-xl mx-auto">
            Veja a diferença brutal de valor entre o plano mensal e a nossa oferta de pré-lançamento.
          </p>
        </div>

        {/* --- TOGGLE --- */}
        <div className="flex justify-center mb-12">
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
        </div>

        {/* GRID DE CARDS */}
        <div className="grid md:grid-cols-2 gap-6 items-center justify-center max-w-4xl mx-auto perspective-[1000px]">
          
          {/* CARD 1: O PREÇO */}
          <div className="relative z-20 order-1 flex justify-center md:justify-end">
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
                {/* Badge Flutuante */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`px-5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-md mb-6 ${theme.badgeBg}`}
                >
                  {isSmart ? '⚡ Oferta Especial' : 'Plano Padrão'}
                </motion.div>

                {/* Conteúdo */}
                <div className="w-full">
                    <p className={`font-bold text-xs uppercase tracking-[0.2em] mb-2 opacity-80 ${theme.textColor}`}>
                      {isSmart ? 'BUDDY B SMART' : 'BUDDY B STANDARD'}
                    </p>
                    
                    <div className="mb-6">
                      {isSmart ? (
                        <div className="flex flex-col items-center">
                          <span className="text-sm text-purple-200 line-through decoration-white/50 font-medium mb-1">
                            De R$ 358,80/ano
                          </span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-medium text-white/90">R$</span>
                            <span className="text-6xl font-extrabold tracking-tighter text-white drop-shadow-lg">6,90</span>
                            <span className="text-lg font-medium text-white/90">/mês</span>
                          </div>
                          <p className="text-[10px] text-[#424242] mt-2 font-bold bg-[#FFD400] px-3 py-1 rounded-full inline-block shadow-sm">
                            Total de R$ 82,80/ano
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-medium text-gray-400">R$</span>
                            <span className="text-6xl font-extrabold tracking-tighter text-[#424242]">29,90</span>
                            <span className="text-lg font-medium text-gray-400">/mês</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Lista */}
                    <div className="space-y-3 w-full text-left bg-black/5 rounded-xl p-4 mb-6">
                       <ul className={`space-y-2.5 text-xs font-semibold ${theme.textColor}`}>
                          <li className="flex gap-2 items-center">
                             <div className={`${theme.iconColor}`}><Icons.Check /></div>
                             <span>{isSmart ? 'Economia garantida' : 'Liberdade contratual'}</span>
                          </li>
                          <li className="flex gap-2 items-center">
                             <div className={`${theme.iconColor}`}><Icons.Check /></div>
                             <span>{isSmart ? 'Pagamento único (Sem mensalidade)' : 'Pagamento recorrente'}</span>
                          </li>
                          <li className="flex gap-2 items-center">
                             <div className={`${theme.iconColor}`}><Icons.Check /></div>
                             <span>Conteúdos exclusivos</span>
                          </li>
                          {isSmart && (
                            <li className="flex gap-2 items-center">
                               <div className="text-[#FFD400]"><Icons.Crown /></div>
                               <span className="text-[#FFD400]">Bônus: 80% de desconto</span>
                            </li>
                          )}
                       </ul>
                    </div>
                </div>

                <motion.button 
                  onClick={scrollToForm}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3.5 rounded-xl font-extrabold text-base shadow-xl flex items-center justify-center gap-2 group relative overflow-hidden ${theme.buttonBg}`}
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
          </div>

          {/* CARD 2: BENEFÍCIOS GERAIS (COMPACTO & DIAGRAMADO) */}
          <div className="order-2 flex justify-center md:justify-start">
            <div className="relative bg-white border border-gray-100 p-6 rounded-[1.5rem] shadow-lg flex flex-col justify-center w-full max-w-[320px]">
              
              <h3 className="text-lg font-bold text-[#424242] mb-5 leading-tight">
                Por que escolher o <span className="text-primary">Buddy B?</span>
              </h3>
              
              <div className="flex flex-col gap-4">
                 <div className="flex gap-3 items-start">
                    <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-500 shrink-0 mt-0.5">
                      <Icons.Shield />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#424242] text-sm mb-0.5">Segurança Bancária</h4>
                      <p className="text-xs text-[#666666] leading-relaxed">Criptografia de ponta a ponta igual a dos grandes bancos.</p>
                    </div>
                 </div>

                 <div className="flex gap-3 items-start">
                    <div className="w-9 h-9 rounded-full bg-purple-50 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Icons.Zap />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#424242] text-sm mb-0.5">Automação Inteligente</h4>
                      <p className="text-xs text-[#666666] leading-relaxed">Diga adeus ao trabalho manual. Tudo sincronizado.</p>
                    </div>
                 </div>

                 <div className="flex gap-3 items-start">
                    <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0 mt-0.5">
                      <Icons.Star />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#424242] text-sm mb-0.5">Suporte Premium</h4>
                      <p className="text-xs text-[#666666] leading-relaxed">Atendimento prioritário via WhatsApp para assinantes.</p>
                    </div>
                 </div>
              </div>

              <div className="mt-5 p-2.5 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center gap-2">
                 <div className="flex text-[#FFD400] scale-75">
                   <Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star />
                 </div>
                 <span className="text-xs font-bold text-[#424242]">Satisfação Garantida</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}