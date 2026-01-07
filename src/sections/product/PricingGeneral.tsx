import React from 'react';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
  <div className="flex-shrink-0 mr-3">
    <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.7322 10.4131C28.1558 9.8623 27.3873 9.8623 26.8109 10.4131L15.6677 21.0623L12.2094 17.941C12.0173 17.7574 11.6331 17.5738 11.2488 17.5738C10.8646 17.5738 10.6724 17.7574 10.2882 17.941C9.90394 18.4918 9.90394 19.2262 10.2882 19.5934L14.5149 23.6328C14.7071 23.8164 15.0913 24 15.4756 24C15.8598 24 16.0519 23.8164 16.4362 23.6328L28.5401 12.0656C29.1165 11.6984 29.1165 10.9639 28.7322 10.4131Z" fill="#424242"/>
    </svg>
  </div>
);

export function PricingGeneral() {
  return (
    <section className="py-24 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-8">
          
          {/* --- CARD 1: STANDARD --- */}
          <div 
            className="relative bg-[#FDFDFD] rounded-[8px] px-[30px] pt-[28px] flex flex-col items-center shadow-lg overflow-hidden"
            style={{ width: '338px', height: '484px' }}
          >
            <h3 className="w-full text-left font-heading font-extrabold text-[#424242] text-[22px] leading-[33px] mb-[16px]">
              Buddy B Standard
            </h3>
            
            <div className="w-full text-left flex items-baseline gap-1 mb-0">
              <span className="font-body font-semibold text-[#424242] text-[36px] leading-[49px]">R$ 29,90</span>
              <span className="font-body font-semibold text-[#424242] text-[24px]">/Mês</span>
            </div>
            <p className="w-full text-left font-body font-bold text-[#424242] text-[12px] leading-[16px] mb-[8px]">
              R$ 358,80/Ano
            </p>
            
            <p className="font-body font-normal text-[#424242] text-[14px] leading-[19px] text-justify w-[278px] mb-[18px]">
              Organize suas finanças com autonomia e dê o primeiro passo para uma vida financeira mais equilibrada.
            </p>

            <Link to="/oferta" className="mb-[18px] w-full flex justify-center">
              <div className="w-[277.71px] h-[44px] bg-[#0A438F] rounded-pill flex items-center justify-center text-white font-bold text-[16px] cursor-pointer hover:bg-[#083675] transition-colors shadow-md">
                Testar grátis por 7 dias
              </div>
            </Link>

            <div className="w-full border-t border-[#E8E9EA] pt-[14px]">
              <p className="font-body font-semibold text-[#424242] text-[18px] leading-[25px] mb-[10px] text-left">
                Assinatura mensal
              </p>
              <ul className="w-full space-y-[2px]">
                <li className="flex text-[14px] text-[#424242] font-body items-start leading-tight -ml-2">
                  <CheckIcon /> <span className="pt-2">Liberdade contratual<br/>(Pay as You Go )</span>
                </li>
                <li className="flex text-[14px] text-[#424242] font-body items-center leading-tight -ml-2">
                  <CheckIcon /> <span>Possibilidade de upgrade</span>
                </li>
                <li className="flex text-[14px] text-[#424242] font-body items-center leading-tight -ml-2">
                  <CheckIcon /> <span>Conteúdos exclusivos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* --- CARD 2: SMART --- */}
          <div 
            className="relative flex flex-col"
            style={{ width: '338px', height: '525px' }}
          >
            <div 
              className="w-full h-[36px] bg-[#7E5BFF]/70 rounded-t-[8px] flex items-center justify-end pr-6 relative z-10 flex-shrink-0"
            >
              <span className="font-body font-extrabold text-[#F0F4F8] text-[20px] leading-[33px]">
                Recomendado
              </span>
            </div>

            <div 
              className="flex-1 bg-[#FDFDFD] rounded-b-[8px] px-[30px] pt-[28px] flex flex-col items-center shadow-lg overflow-hidden"
            >
              <h3 className="w-full text-left font-heading font-extrabold text-[#424242] text-[22px] leading-[33px] mb-[16px]">
                Buddy B Smart
              </h3>
              
              <div className="w-full text-left flex items-baseline gap-1 mb-0">
                <span className="font-body font-semibold text-[#424242] text-[36px] leading-[49px]">R$ 6,90</span>
                <span className="font-body font-semibold text-[#424242] text-[24px]">/Mês</span>
              </div>
              <p className="w-full text-left font-body font-bold text-[#424242] text-[12px] leading-[16px] mb-[8px]">
                R$ 82,80/Ano
              </p>
              
              <p className="font-body font-normal text-[#424242] text-[14px] leading-[19px] text-justify w-[278px] mb-[18px]">
                Planeje com estratégia e economize enquanto evolui. Mais vantagens para você alcançar suas metas.
              </p>

              <Link to="/oferta" className="mb-[18px] w-full flex justify-center">
                <div className="w-[278px] h-[44px] bg-[#9B80FF] rounded-pill flex items-center justify-center text-white font-bold text-[16px] cursor-pointer hover:bg-[#8a6df0] transition-colors shadow-md">
                  Testar grátis por 7 dias
                </div>
              </Link>

              <div className="w-full border-t border-[#E8E9EA] pt-[14px]">
                <p className="font-body font-semibold text-[#424242] text-[18px] leading-[25px] mb-[10px] text-left">
                  Assinatura anual
                </p>
                <ul className="w-full space-y-[2px]">
                  <li className="flex text-[14px] text-[#424242] font-body items-center leading-tight -ml-2">
                    <CheckIcon /> <span>Economia garantida</span>
                  </li>
                  <li className="flex text-[14px] text-[#424242] font-body items-start leading-tight -ml-2">
                    <CheckIcon /> <span className="pt-2">Pagamentos único para melhor planejamento</span>
                  </li>
                  <li className="flex text-[14px] text-[#424242] font-body items-center leading-tight -ml-2">
                    <CheckIcon /> <span>Conteúdos exclusivos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* --- CARD 3: CHAT (EM BREVE) --- */}
          <div 
            className="relative bg-[#FDFDFD] rounded-[8px] px-[30px] pt-[28px] flex flex-col items-center shadow-lg overflow-hidden"
            style={{ width: '338px', height: '484px' }}
          >
            <h3 className="w-full text-left font-heading font-extrabold text-[#424242] text-[22px] leading-[33px] mb-[19px]">
              Buddy B Chat
            </h3>
            
            <div className="w-full text-left mb-[12px]">
              <span className="font-body font-semibold text-[#424242] text-[36px] leading-[49px]">Em Breve</span>
            </div>
            
            <p className="font-body font-normal text-[#424242] text-[14px] leading-[19px] text-justify w-[278px] mb-[18px]">
              Transforme sua gestão financeira com consultorias personalizadas e vá além com educação exclusiva e prática.
            </p>

            {/* Botão Azul Escuro */}
            <div className="mb-[18px] w-full flex justify-center">
              <div 
                className="w-[277.71px] h-[44px] bg-[#0A438F] rounded-pill flex items-center justify-center text-white font-bold text-[16px] cursor-not-allowed opacity-90 shadow-md"
              >
                Saiba Mais
              </div>
            </div>

            <div className="w-full border-t border-[#E8E9EA] pt-[14px]">
              <p className="font-body font-semibold text-[#424242] text-[18px] leading-[25px] mb-[10px] text-left">
                Consultoria Sob Demanda
              </p>
              <ul className="w-full space-y-[2px]">
                <li className="flex text-[14px] text-[#424242] font-body items-start leading-tight -ml-2">
                  <CheckIcon /> <span className="pt-2">Orientações financeiras personalizadas</span>
                </li>
                <li className="flex text-[14px] text-[#424242] font-body items-center leading-tight -ml-2">
                  <CheckIcon /> <span>Agende online com facilidade</span>
                </li>
                <li className="flex text-[14px] text-[#424242] font-body items-start leading-tight -ml-2">
                  <CheckIcon /> <span className="pt-2">Inclui 50 minutos de consultoria dedicada</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}