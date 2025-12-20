import React from 'react';
import LeadForm from '../../components/form/LeadForm';

export function RescueSection() {
  
  // Componente interno dos Badges para reutilizar (Mobile vs Desktop)
  const SecurityBadges = () => (
    <div className="flex flex-wrap justify-center gap-6 opacity-80 hover:opacity-100 transition-opacity">
      <div className="flex items-center gap-2 group">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        <span className="text-[10px] font-bold text-white uppercase tracking-wide">Pagamento Seguro</span>
      </div>
      <div className="flex items-center gap-2 group">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span className="text-[10px] font-bold text-white uppercase tracking-wide">Dados Protegidos</span>
      </div>
      <div className="flex items-center gap-2 group">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
        <span className="text-[10px] font-bold text-white uppercase tracking-wide">Acesso Imediato</span>
      </div>
    </div>
  );

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#583CE3] to-[#9B80FF] relative overflow-hidden">
      
      {/* Elementos de Fundo */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4 mix-blend-overlay" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#583CE3]/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/4 mix-blend-multiply" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LADO ESQUERDO: O FORMULÁRIO */}
          <div className="lg:col-span-5 lg:order-1 order-2 flex flex-col items-center lg:items-start">
            
            {/* Card Branco Limpo */}
            <div className="relative w-full max-w-md bg-white rounded-[20px] shadow-2xl p-6 md:p-8">
                <div className="text-center mb-6">
                   <p className="text-xs font-bold text-[#9B80FF] uppercase tracking-widest mb-1">Última chance</p>
                   <h3 className="text-2xl font-heading font-bold text-[#424242]">Garanta 80% OFF</h3>
                </div>
                <LeadForm showTitle={false} />
            </div>

            {/* BADGES MOBILE (Aparecem embaixo do form apenas no mobile) */}
            <div className="mt-8 lg:hidden">
              <SecurityBadges />
            </div>

          </div>

          {/* LADO DIREITO: TEXTO */}
          <div className="lg:col-span-7 lg:order-2 order-1 text-center lg:text-left lg:pl-8 flex flex-col items-center lg:items-start">
            
            {/* LOGO */}
            <div className="mb-6">
              <img 
                src="/assets/Logo1.png" 
                alt="Buddy B" 
                className="h-16 md:h-20 w-auto brightness-0 invert drop-shadow-lg opacity-100" 
              />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              O risco é todo <span className="text-[#FFD400]">nosso</span>.
            </h2>
            
            {/* TEXTO REFORMATADO (Com as quebras de linha pedidas) */}
            <div className="text-lg md:text-xl text-white/90 font-body mb-8 leading-relaxed">
              <p>Você não precisa decidir agora.</p>
              <p>Garanta sua vaga com <strong className="text-white">80% de desconto</strong></p>
              <p>E teste na prática a mágica do Buddy B.</p>
            </div>

            {/* Box de Garantia (ESCONDIDO NO MOBILE "hidden md:inline-flex") */}
            <div className="hidden md:inline-flex bg-white rounded-[20px] p-6 shadow-lg flex-col md:flex-row items-center gap-4 mb-10 transition-transform hover:scale-[1.02] text-left">
              <div className="w-12 h-12 bg-[#20CE66]/10 rounded-full flex items-center justify-center shrink-0 mx-auto md:mx-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#20CE66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-[#424242] mb-0.5 font-heading">Garantia Incondicional de 7 Dias</h3>
                <p className="text-sm text-[#666666] leading-snug">
                  Devolvemos 100% do seu dinheiro. Sem perguntas.
                </p>
              </div>
            </div>

            {/* BADGES DESKTOP (Aparecem aqui apenas no desktop) */}
            <div className="hidden lg:block w-full">
              <div className="flex justify-start">
                 <SecurityBadges />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}