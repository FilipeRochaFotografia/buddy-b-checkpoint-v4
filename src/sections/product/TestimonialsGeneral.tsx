import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../../lib/utils';

const testimonials = [
  {
    name: "Amanda Silva.",
    text: "“Sempre tentei controlar minhas finanças em planilhas, mas acabava me perdendo e desistindo no meio do caminho. O BuddyB facilitou tudo! Agora acompanho meu fluxo de caixa em tempo real e tenho uma visão muito mais clara do meu dinheiro. Salvou minha organização financeira!”"
  },
  {
    name: "Felipe Rodriges",
    text: "“Planilhas nunca funcionaram pra mim, era complicado atualizar e entender os dados. Com o BuddyB, tudo ficou automático e simples. O app me ajudou a criar metas e controlar meus gastos sem dor de cabeça. Recomendo demais!”"
  },
  {
    name: "Luana Silva.",
    text: "“Sempre tentei controlar minhas finanças em planilhas, mas acabava me perdendo e desistindo no meio do caminho. O BuddyB facilitou tudo! Agora acompanho meu fluxo de caixa em tempo real e tenho uma visão muito mais clara do meu dinheiro. Salvou minha organização financeira!”"
  }
];

export function TestimonialsGeneral() {
  const [activeIndex, setActiveIndex] = useState(1);

  const getPrevIndex = (current: number) => (current === 0 ? testimonials.length - 1 : current - 1);
  const getNextIndex = (current: number) => (current === testimonials.length - 1 ? 0 : current + 1);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 50) {
      setActiveIndex(getPrevIndex(activeIndex));
    } else if (info.offset.x < -50) {
      setActiveIndex(getNextIndex(activeIndex));
    }
  };

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-[#F9FAFB] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 flex flex-col items-center">
        
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-left md:text-center lg:text-left w-full max-w-[1280px] mb-8 lg:mb-16"
        >
          <h2 className="font-heading font-bold text-[#424242] text-[32px] leading-[40px] lg:leading-[47px] mb-4">
            Confiança que gera resultados
          </h2>
          <p className="font-body font-normal text-[#424242] text-[20px] leading-[27px] lg:text-[26px] lg:leading-[35px] max-w-[758px]">
            Quem usa o Buddy B sabe: gestão financeira inteligente faz toda a diferença. Confira o que nossos usuários têm a dizer.
          </p>
        </motion.div>

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden lg:flex flex-row items-center justify-center gap-8 relative">
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index;
            
            const cardStyles: React.CSSProperties = isActive ? {
              width: '414px',
              height: '266px',
              paddingLeft: '36px',
              marginTop: '0px'
            } : {
              width: '400px',
              height: '236px',
              paddingTop: '25px',
              paddingLeft: '29px', 
              marginTop: '15px'
            };

            const gapSize = isActive ? '21px' : '10px';

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onClick={() => setActiveIndex(index)}
                className={`
                  relative rounded-[10px] flex flex-col shadow-sm border border-[#9B80FF] cursor-pointer transition-all duration-300
                  ${isActive ? 'bg-[#FDFDFD] justify-center' : 'bg-[#9B80FF] justify-start'}
                `}
                style={cardStyles}
              >
                <p 
                  className={`
                    font-body font-semibold text-[16px] leading-[22px] text-left
                    ${isActive ? 'text-[#9B80FF]' : 'text-[#FDFDFD]'}
                  `}
                  style={{ width: '341px', marginBottom: gapSize }}
                >
                  {testimonial.text}
                </p>
                
                <div style={{ width: '341px', textAlign: 'left' }}>
                  <span 
                    className={`
                      font-body font-bold text-[16px] leading-[22px]
                      ${isActive ? 'text-[#9B80FF]' : 'text-[#FDFDFD]'}
                    `}
                  >
                    {testimonial.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="lg:hidden w-full relative h-[320px] flex justify-center items-center mt-4">
          <div className="relative w-full max-w-[360px] h-[300px] flex justify-center items-center">
            
            {/* Card Anterior */}
            <div 
              className="absolute left-[-20px] z-0 opacity-100 scale-90 blur-[1px]"
              onClick={() => setActiveIndex(getPrevIndex(activeIndex))}
            >
               <div className="w-[300px] h-[240px] bg-[#9B80FF] rounded-[10px] border border-[#9B80FF] p-6 flex flex-col justify-center shadow-sm">
                  <p className="font-body font-semibold text-[14px] leading-[20px] text-[#FDFDFD] line-clamp-5">
                    {testimonials[getPrevIndex(activeIndex)].text}
                  </p>
                  <span className="font-body font-bold text-[14px] text-[#FDFDFD] mt-4">
                    {testimonials[getPrevIndex(activeIndex)].name}
                  </span>
               </div>
            </div>

            {/* Card Próximo */}
            <div 
              className="absolute right-[-20px] z-0 opacity-100 scale-90 blur-[1px]"
              onClick={() => setActiveIndex(getNextIndex(activeIndex))}
            >
               <div className="w-[300px] h-[240px] bg-[#9B80FF] rounded-[10px] border border-[#9B80FF] p-6 flex flex-col justify-center shadow-sm">
                  <p className="font-body font-semibold text-[14px] leading-[20px] text-[#FDFDFD] line-clamp-5">
                    {testimonials[getNextIndex(activeIndex)].text}
                  </p>
                  <span className="font-body font-bold text-[14px] text-[#FDFDFD] mt-4">
                     {testimonials[getNextIndex(activeIndex)].name}
                  </span>
               </div>
            </div>

            {/* Card Ativo (Sem animação de cor lenta) */}
            <motion.div
              key={activeIndex}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="absolute z-20 w-[320px] h-auto min-h-[260px] bg-[#FDFDFD] rounded-[10px] border border-[#9B80FF] p-6 flex flex-col justify-center shadow-lg"
            >
              <p className="font-body font-semibold text-[16px] leading-[24px] text-left mb-4 text-[#9B80FF]">
                {testimonials[activeIndex].text}
              </p>
              
              <span className="font-body font-bold text-[16px] leading-[22px] text-left text-[#9B80FF]">
                {testimonials[activeIndex].name}
              </span>
            </motion.div>

          </div>
        </div>

        {/* PAGINAÇÃO */}
        <div className="flex gap-2 mt-8 lg:mt-12">
          {testimonials.map((_, index) => (
            <div 
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                h-3 rounded-full border border-[#9B80FF] cursor-pointer transition-all duration-300
                ${activeIndex === index ? 'w-8 bg-[#9B80FF]' : 'w-3 bg-transparent'}
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
}