import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CheckIcon = () => (
  <div className="flex-shrink-0 mr-3">
    <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.7322 10.4131C28.1558 9.8623 27.3873 9.8623 26.8109 10.4131L15.6677 21.0623L12.2094 17.941C12.0173 17.7574 11.6331 17.5738 11.2488 17.5738C10.8646 17.5738 10.6724 17.7574 10.2882 17.941C9.90394 18.4918 9.90394 19.2262 10.2882 19.5934L14.5149 23.6328C14.7071 23.8164 15.0913 24 15.4756 24C15.8598 24 16.0519 23.8164 16.4362 23.6328L28.5401 12.0656C29.1165 11.6984 29.1165 10.9639 28.7322 10.4131Z" fill="#424242"/>
    </svg>
  </div>
);

const pricingData = [
  {
    id: 'standard',
    type: 'standard',
    title: 'Buddy B Standard',
    price: 'R$ 29,90',
    period: '/Mês',
    yearlyPrice: 'R$ 358,80/Ano',
    description: 'Organize suas finanças com autonomia e dê o primeiro passo para uma vida financeira mais equilibrada.',
    buttonText: 'Testar grátis por 7 dias',
    buttonColor: 'bg-[#0A438F] hover:bg-[#083675]',
    sectionTitle: 'Assinatura mensal',
    features: [
      { text: 'Liberdade contratual', sub: '(Pay as You Go )' },
      { text: 'Possibilidade de upgrade' },
      { text: 'Conteúdos exclusivos' }
    ]
  },
  {
    id: 'smart',
    type: 'smart',
    title: 'Buddy B Smart',
    price: 'R$ 6,90',
    period: '/Mês',
    yearlyPrice: 'R$ 82,80/Ano',
    description: 'Planeje com estratégia e economize enquanto evolui. Mais vantagens para você alcançar suas metas.',
    buttonText: 'Testar grátis por 7 dias',
    buttonColor: 'bg-[#9B80FF] hover:bg-[#8a6df0]',
    sectionTitle: 'Assinatura anual',
    features: [
      { text: 'Economia garantida' },
      { text: 'Pagamentos único para melhor planejamento' },
      { text: 'Conteúdos exclusivos' }
    ]
  },
  {
    id: 'chat',
    type: 'chat',
    title: 'Buddy B Chat',
    price: 'Em Breve',
    period: '',
    yearlyPrice: '',
    description: 'Transforme sua gestão financeira com consultorias personalizadas e vá além com educação exclusiva e prática.',
    buttonText: 'Saiba Mais',
    buttonColor: 'bg-[#0A438F] opacity-90 cursor-not-allowed',
    sectionTitle: 'Consultoria Sob Demanda',
    features: [
      { text: 'Orientações financeiras personalizadas' },
      { text: 'Agende online com facilidade' },
      { text: 'Inclui 50 minutos de consultoria dedicada' }
    ]
  }
];

const PricingCard = ({ data }: { data: typeof pricingData[0] }) => {
  const isSmart = data.type === 'smart';
  const isChat = data.type === 'chat';

  const CardContent = () => (
    <>
      <h3 className={`w-full text-left font-heading font-extrabold text-[#424242] text-[22px] leading-[33px] ${isChat ? 'mb-[19px]' : 'mb-[16px]'}`}>
        {data.title}
      </h3>
      
      <div className={`w-full text-left flex items-baseline gap-1 ${isChat ? 'mb-[12px]' : 'mb-0'}`}>
        <span className="font-body font-semibold text-[#424242] text-[36px] leading-[49px]">{data.price}</span>
        {data.period && <span className="font-body font-semibold text-[#424242] text-[24px]">{data.period}</span>}
      </div>
      
      {!isChat && (
        <p className="w-full text-left font-body font-bold text-[#424242] text-[12px] leading-[16px] mb-[8px]">
          {data.yearlyPrice}
        </p>
      )}
      
      <p className="font-body font-normal text-[#424242] text-[14px] leading-[19px] text-justify w-[278px] mb-[18px]">
        {data.description}
      </p>

      {isChat ? (
        <div className="mb-[18px] w-full flex justify-center">
          <div className={`w-[277.71px] h-[44px] rounded-pill flex items-center justify-center text-white font-bold text-[16px] shadow-md ${data.buttonColor}`}>
            {data.buttonText}
          </div>
        </div>
      ) : (
        <Link to="/oferta" className="mb-[18px] w-full flex justify-center">
          <div className={`w-[278px] h-[44px] rounded-pill flex items-center justify-center text-white font-bold text-[16px] cursor-pointer transition-colors shadow-md ${data.buttonColor}`}>
            {data.buttonText}
          </div>
        </Link>
      )}

      <div className="w-full border-t border-[#E8E9EA] pt-[14px]">
        <p className="font-body font-semibold text-[#424242] text-[18px] leading-[25px] mb-[10px] text-left">
          {data.sectionTitle}
        </p>
        <ul className="w-full space-y-[2px]">
          {data.features.map((feature, idx) => (
            <li key={idx} className="flex text-[14px] text-[#424242] font-body items-start leading-tight -ml-2">
              <CheckIcon />
              <span className={feature.sub ? "pt-2" : "pt-0 flex items-center h-[34px]"}>
                {feature.text}
                {feature.sub && <><br/>{feature.sub}</>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  if (isSmart) {
    return (
      <div className="relative flex flex-col" style={{ width: '338px', height: '525px' }}>
        <div className="w-full h-[36px] bg-[#7E5BFF]/70 rounded-t-[8px] flex items-center justify-end pr-6 relative z-10 flex-shrink-0">
          <span className="font-body font-extrabold text-[#F0F4F8] text-[20px] leading-[33px]">
            Recomendado
          </span>
        </div>
        <div className="flex-1 bg-[#FDFDFD] rounded-b-[8px] px-[30px] pt-[28px] flex flex-col items-center shadow-lg overflow-hidden">
          <CardContent />
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative bg-[#FDFDFD] rounded-[8px] px-[30px] pt-[28px] flex flex-col items-center shadow-lg overflow-hidden"
      style={{ width: '338px', height: '484px' }}
    >
      <CardContent />
    </div>
  );
};

export function PricingGeneral() {
  // Inicia no índice 1 (Smart/Recomendado)
  const [mobileIndex, setMobileIndex] = useState(1);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginateMobile = (newDirection: number) => {
    let nextIndex = mobileIndex + newDirection;
    if (nextIndex < 0) nextIndex = pricingData.length - 1;
    if (nextIndex >= pricingData.length) nextIndex = 0;
    setMobileIndex(nextIndex);
  };

  return (
    // Reduzido py-24 para py-10 no mobile
    <section className="py-10 lg:py-24 bg-[#F3F4F6] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* DESKTOP VIEW */}
        <div className="hidden lg:flex flex-row justify-center items-end gap-8">
          {pricingData.map((data, index) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <PricingCard data={data} />
            </motion.div>
          ))}
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Altura ajustada para o card mais alto */}
          <div className="relative w-[338px] h-[525px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginateMobile(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginateMobile(-1);
                  }
                }}
                className="absolute top-0"
              >
                <PricingCard data={pricingData[mobileIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2 mt-4">
            {pricingData.map((_, index) => (
              <div 
                key={index}
                onClick={() => setMobileIndex(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === mobileIndex 
                    ? 'w-8 h-3 bg-[#9B80FF]' // Tracinho roxo (Ativo)
                    : 'w-3 h-3 border-2 border-[#9B80FF] bg-transparent' // Bolinha vazada (Inativo)
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}