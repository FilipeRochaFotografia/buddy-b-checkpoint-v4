import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

export function MobileShowcase() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      
      {/* BACKGROUND (CSS do Figma) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(97.23deg, #9B80FF 0.09%, #0D46D6 46.88%, #0FC2BF 98.28%)',
          opacity: 0.2
        }}
      />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* 1. IMAGEM DOS CELULARES */}
          {/* Ajuste: lg:max-w-[580px] para segurar o tamanho no desktop */}
          <div className="order-1 flex justify-center lg:justify-start">
             <img 
               src="/assets/images/celulares.png" 
               alt="App Buddy B em vários dispositivos" 
               className="w-full max-w-[350px] lg:max-w-[580px] h-auto object-contain drop-shadow-2xl"
             />
          </div>
          
          {/* 2. CONTEÚDO DE TEXTO */}
          <div className="order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <div className="w-full max-w-[350px] lg:max-w-[534px]">
              
              {/* Título */}
              <h2 className="font-heading font-bold text-[#424242] text-[30px] leading-[41px] lg:text-[40px] lg:leading-[59px] mb-6 lg:mb-8 text-left">
                Tudo o que você precisa, na palma da mão
              </h2>

              {/* Texto do Corpo */}
              <p className="font-body font-normal text-[#424242] text-[20px] leading-[27px] text-justify max-w-[350px] lg:max-w-[499px] mb-10">
                Do fluxo de caixa à consultoria financeira, tudo o que você precisa para organizar suas finanças está em um só app. Acompanhe cada movimentação em tempo real, visualize seus saldos de forma integrada, defina metas claras e tome decisões com confiança. Mais do que números, você ganha clareza e estratégia para crescer sem surpresas.
              </p>

              {/* Botão */}
              <Link to="/oferta">
                <Button 
                  variant="primary" 
                  className="w-[350px] lg:w-[476px] h-[54px] text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Quero experimentar
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}