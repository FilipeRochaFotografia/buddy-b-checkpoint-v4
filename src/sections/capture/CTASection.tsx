import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';

export function CTASection() {
  const scrollToRescue = () => {
    const rescueSection = document.getElementById('resgate');
    if (rescueSection) {
      rescueSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#F5F3FF] to-white overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center justify-center">
          
          {/* TEXT & BUTTON */}
          <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#424242] mb-4 leading-tight">
              Repense o jeito <br />
              <span className="text-[#9B80FF]">de usar o seu dinheiro</span>
            </h2>
            
            <p className="text-xs sm:text-sm md:text-lg text-[#666666] font-body mb-8 leading-relaxed w-full px-2 md:px-0">
              O Buddy B não é sobre números, é sobre clareza. <br className="hidden md:block" />
              Experimente e descubra como é ter um companheiro <br className="hidden md:block" />
              de confiança para suas decisões financeiras.
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-3 w-full sm:w-auto">
              <Button 
                onClick={scrollToRescue} 
                variant="primary" 
                className="h-12 text-base px-8 shadow-float hover:scale-105 transition-transform w-full sm:w-auto"
              >
                GARANTIR MEU ACESSO
              </Button>
              <p className="text-[10px] text-[#A2A2A2] font-semibold flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Oferta válida apenas nesta página
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#9B80FF]/20 to-[#20CE66]/20 rounded-full blur-[60px] scale-75 -z-10"></div>
             
             <motion.img 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               src="/assets/images/68786.png" 
               alt="Buddy B App Interface" 
               className="w-full max-w-sm object-contain drop-shadow-2xl hover:rotate-1 transition-transform duration-500"
             />
          </div>

        </div>
      </div>
    </section>
  );
}