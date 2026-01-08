import React, { useState } from 'react';

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

  return (
    <section id="depoimentos" className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 md:px-12 flex flex-col items-center">
        
        {/* CABEÇALHO */}
        <div className="text-left w-full max-w-[1280px] mb-16">
          <h2 className="font-heading font-bold text-[#424242] text-[32px] leading-[47px] mb-2">
            Confiança que gera resultados
          </h2>
          <p className="font-body font-normal text-[#424242] text-[26px] leading-[35px] max-w-[758px]">
            Quem usa o Buddy B sabe: gestão financeira inteligente faz toda a diferença. Confira o que nossos usuários têm a dizer.
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
          
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index;
            
            // Estilos condicionais
            const cardStyles: React.CSSProperties = isActive ? {
              width: '414px',
              height: '266px',
              paddingLeft: '36px',
              // MUDANÇA: Removemos paddingTop fixo e usamos justify-center no className para centralizar verticalmente
              marginTop: '0px'
            } : {
              width: '400px',
              height: '236px',
              paddingTop: '25px', // Inativos mantêm o topo fixo conforme original
              paddingLeft: '29px', 
              marginTop: '15px'
            };

            const gapSize = isActive ? '21px' : '10px';

            return (
              <div 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  relative rounded-[10px] flex flex-col shadow-sm border border-[#9B80FF] cursor-pointer transition-all duration-300
                  ${isActive ? 'bg-[#FDFDFD] justify-center' : 'bg-[#9B80FF] justify-start'}
                `}
                style={cardStyles}
              >
                {/* Texto: Open Sans 600 */}
                <p 
                  className={`
                    font-body font-semibold text-[16px] leading-[22px] text-left
                    ${isActive ? 'text-[#9B80FF]' : 'text-[#FDFDFD]'}
                  `}
                  style={{ width: '341px', marginBottom: gapSize }}
                >
                  {testimonial.text}
                </p>
                
                {/* Nome: Open Sans 700 */}
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
              </div>
            );
          })}

        </div>

        {/* PAGINAÇÃO */}
        <div className="flex gap-2 mt-12">
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