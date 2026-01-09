import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../../lib/utils';

const testimonials = [
  {
    name: "Amanda Silva.",
    text: "“Sempre tentei controlar minhas finanças em planilhas, mas acabava me perdendo e desistindo no meio do caminho. O Buddy B facilitou tudo! Agora acompanho meu fluxo de caixa em tempo real e tenho uma visão muito mais clara do meu dinheiro. Salvou minha organização financeira!”"
  },
  {
    name: "Felipe Rodriges.",
    text: "“Planilhas nunca funcionaram pra mim, era complicado atualizar e entender os dados. Com o Buddy B, tudo ficou automático e simples. O app me ajudou a criar metas e controlar meus gastos sem dor de cabeça. Recomendo demais!”"
  },
  {
    name: "Rebeca Alves.",
    text: "“Eu sonhava em fazer minha primeira viagem internacional, mas nunca sobrava dinheiro. Com o Buddy B, consegui organizar meu fluxo de caixa de forma impecável e juntar o valor necessário sem aperto. Foi a ferramenta que faltava para realizar esse sonho!”"
  }
];

export function TestimonialsGeneral() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const getPrevIndex = (current: number) => (current === 0 ? testimonials.length - 1 : current - 1);
  const getNextIndex = (current: number) => (current === testimonials.length - 1 ? 0 : current + 1);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 50) {
      setDirection(-1);
      setActiveIndex(getPrevIndex(activeIndex));
    } else if (info.offset.x < -50) {
      setDirection(1);
      setActiveIndex(getNextIndex(activeIndex));
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      backgroundColor: '#9B80FF'
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      backgroundColor: '#FDFDFD'
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      backgroundColor: '#9B80FF'
    })
  };

  return (
    /* TESTIMONIALS SECTION */
    <section id="depoimentos" className="py-24 bg-[#F9FAFB] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 flex flex-col items-center">
        
        {/* HEADER */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-left md:text-center lg:text-left w-full max-w-[1280px] mb-16"
        >
          <h2 className="font-heading font-bold text-[#424242] text-[32px] leading-[47px] mb-2">
            Confiança que gera resultados
          </h2>
          <p className="font-body font-normal text-[#424242] text-[26px] leading-[35px] max-w-[758px]">
            Quem usa o Buddy B sabe: gestão financeira inteligente faz toda a diferença. Confira o que nossos usuários têm a dizer.
          </p>
        </motion.div>

        {/* DESKTOP CARDS */}
        <div 
          className="hidden lg:flex flex-row items-center justify-center gap-8 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
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
                layout
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`
                  relative rounded-[10px] flex flex-col shadow-sm border border-[#9B80FF] cursor-pointer
                `}
                animate={{
                  backgroundColor: isActive ? '#FDFDFD' : '#9B80FF',
                }}
                transition={{ duration: 0.4 }}
                style={cardStyles}
              >
                <div className={`flex flex-col ${isActive ? 'justify-center h-full' : 'justify-start'}`}>
                  <motion.p 
                    className="font-body font-semibold text-[16px] leading-[22px] text-left"
                    animate={{ color: isActive ? '#9B80FF' : '#FDFDFD' }}
                    style={{ width: '341px', marginBottom: gapSize }}
                  >
                    {testimonial.text}
                  </motion.p>
                  
                  <div style={{ width: '341px', textAlign: 'left' }}>
                    <motion.span 
                      className="font-body font-bold text-[16px] leading-[22px] text-left"
                      animate={{ color: isActive ? '#9B80FF' : '#FDFDFD' }}
                    >
                      {testimonial.name}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE CARDS */}
        <div className="lg:hidden w-full relative h-[320px] flex justify-center items-center mt-4 overflow-visible">
          <div className="relative w-full max-w-[360px] h-[300px] flex justify-center items-center">
            
            {/* Previous Visual */}
            <div 
              className="absolute left-[-20px] z-0 opacity-100 scale-90 blur-[1px]"
              onClick={() => {
                setDirection(-1);
                setActiveIndex(getPrevIndex(activeIndex));
              }}
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

            {/* Next Visual */}
            <div 
              className="absolute right-[-20px] z-0 opacity-100 scale-90 blur-[1px]"
              onClick={() => {
                setDirection(1);
                setActiveIndex(getNextIndex(activeIndex));
              }}
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

            {/* Active Animated Card */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="absolute z-20 w-[320px] h-auto min-h-[260px] rounded-[10px] border border-[#9B80FF] p-6 flex flex-col justify-center shadow-lg"
              >
                <p className="font-body font-semibold text-[16px] leading-[24px] text-left mb-4 text-[#9B80FF]">
                  {testimonials[activeIndex].text}
                </p>
                
                <span className="font-body font-bold text-[16px] leading-[22px] text-left text-[#9B80FF]">
                  {testimonials[activeIndex].name}
                </span>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* PAGINATION */}
        <div className="flex gap-2 mt-8 lg:mt-12">
          {testimonials.map((_, index) => (
            <div 
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
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