import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';

export function CTASection() {
  const scrollToRescue = () => {
    // Procura pela seção de resgate pelo ID
    const rescueSection = document.getElementById('resgate');
    if (rescueSection) {
      rescueSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // AJUSTE 1: Fundo degradê começando do lilás (#F5F3FF) para continuar a seção anterior sem cortes
    // Removida a borda superior (border-t) para a fusão perfeita
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#F5F3FF] to-white overflow-hidden">
      
      {/* AJUSTE 2: max-w-4xl para "apertar" o layout e centralizar os elementos */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center justify-center">
          
          {/* LADO ESQUERDO: TEXTO E BOTÃO */}
          {/* text-center no mobile, text-left no desktop. mx-auto no mobile para centralizar */}
          <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#424242] mb-4 leading-tight">
              Você não tem <br/>
              <span className="text-[#9B80FF]">nada a perder.</span>
            </h2>
            
            <p className="text-base md:text-lg text-[#666666] font-body mb-8 leading-relaxed max-w-md">
              Teste a plataforma, organize suas finanças <br/> e se não gostar, peça seu dinheiro de volta. 
              <strong className="block mt-1 text-[#424242]">O risco é zero.</strong>
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-3 w-full sm:w-auto">
              <Button 
                onClick={scrollToRescue} 
                variant="primary" 
                className="h-14 text-lg px-10 shadow-float hover:scale-105 transition-transform w-full sm:w-auto"
              >
                GARANTIR MEU ACESSO
              </Button>
              <p className="text-[10px] text-[#A2A2A2] font-semibold flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Oferta válida apenas nesta página
              </p>
            </div>
          </div>

          {/* LADO DIREITO: IMAGEM (PACKSHOT) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
             {/* Elemento decorativo de fundo (Glow reduzido) */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[#9B80FF]/20 to-[#20CE66]/20 rounded-full blur-[60px] scale-75 -z-10"></div>
             
             <motion.img 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               src="/assets/images/celulares2.png" 
               alt="Buddy B App Interface" 
               // Ajuste de tamanho: max-w-sm para não ficar gigante
               className="w-full max-w-sm object-contain drop-shadow-2xl hover:rotate-1 transition-transform duration-500"
             />
          </div>

        </div>
      </div>
    </section>
  );
}