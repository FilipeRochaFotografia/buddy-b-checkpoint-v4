import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Renata Moreira Pires",
    text: "Costumava usar várias planilhas separadas para me organizar entre os meus orçamentos. Buddy B tornou tudo mais intuitivo e visual.",
    role: "Analista Financeira",
    delay: 0.1
  },
  {
    name: "Luciana Moreira Alves",
    text: "Posso dizer que consegui organizar a minha primeira viagem ao exterior por causa da ferramenta. Sem falar no fluxo de caixa que ficou impecável.",
    role: "Empreendedora",
    delay: 0.2
  },
  {
    name: "Pedro Marques Dias",
    text: "Sempre gostei de me organizar financeiramente, mas fazia anotações em vários arquivos soltos. O app acabou com a bagunça.",
    role: "Engenheiro",
    delay: 0.3
  }
];

export function SocialProof() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-[#F5F3FF]">
      
      {/* Elementos Decorativos (Glows muito sutis) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#9B80FF]/5 rounded-full blur-[80px] md:blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#20CE66]/5 rounded-full blur-[80px] md:blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Título da Seção (Ajustado e sem traço amarelo) */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-[#424242] leading-tight">
            O que os nossos <br className="md:hidden" />
            <span className="text-[#9B80FF]">usuários</span> estão falando:
          </h2>
          {/* Traço amarelo removido conforme solicitado */}
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5 }}
              // AJUSTE: p-5 no mobile (menor) vs p-8 no desktop
              className="bg-white rounded-[20px] md:rounded-[24px] p-5 md:p-8 shadow-lg border border-purple-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col h-full"
            >
              {/* Ícone de Aspas Decorativo (Menor no mobile) */}
              <div className="absolute top-4 right-5 md:top-6 md:right-8 text-[#9B80FF]/10">
                <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.0547 15.372 15.1172 16.7148 14.3633C17.375 14.0117 18 13.6328 18 13V12C18 10.9336 17.0664 10 16 10H15C13.9336 10 13 9.06641 13 8V3C13 1.93359 13.9336 1 15 1H21C22.0664 1 23 1.93359 23 3V13C23 17.418 19.418 21 15 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.0547 6.37188 15.1172 7.71484 14.3633C8.375 14.0117 9 13.6328 9 13V12C9 10.9336 8.06641 10 7 10H6C4.93359 10 4 9.06641 4 8V3C4 1.93359 4.93359 1 6 1H12C13.0664 1 14 1.93359 14 3V13C14 17.418 10.418 21 6 21H5.0166Z" />
                </svg>
              </div>

              {/* Estrelas */}
              <div className="flex gap-1 mb-4 md:mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 md:w-5 md:h-5 text-[#FFD400] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Texto do Depoimento (Menor no mobile) */}
              <div className="flex-grow">
                <p className="text-[#666666] text-sm md:text-lg leading-relaxed font-body italic">
                  "{item.text}"
                </p>
              </div>

              {/* Autor */}
              <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 mt-4 md:mt-6 border-t border-gray-100">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#9B80FF] to-[#583CE3] flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-md">
                  {item.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                <div>
                  <p className="font-heading font-bold text-[#424242] text-sm md:text-base">
                    {item.name}
                  </p>
                  <p className="text-[10px] md:text-xs text-[#9B80FF] font-semibold uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}