import React from 'react';

export function AboutSection() {
  return (
    // Fundo Escuro Sólido (#1a1b26) - Igual ao Footer
    <section className="pt-16 pb-8 bg-[#1a1b26] text-white border-t border-gray-800">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LADO ESQUERDO: INSTITUCIONAL (Sem contatos) */}
          <div className="text-center md:text-left">
            {/* Logo Branco */}
            <div className="flex justify-center md:justify-start">
                <img 
                src="/assets/Logo1.png" 
                alt="Buddy B" 
                className="h-10 mb-6 brightness-0 invert opacity-90" 
                />
            </div>
            
            <p className="text-gray-400 leading-relaxed text-sm max-w-md mx-auto md:mx-0 font-light">
              O <strong>Buddy B</strong> nasceu com a missão de simplificar a gestão financeira pessoal. 
              Nossa tecnologia bancária segura ajuda milhares de pessoas a tomarem melhores decisões todos os dias.
            </p>
          </div>

          {/* LADO DIREITO: QR CODE + APP (Igual no Mobile e Desktop) */}
          <div className="flex justify-center md:justify-end items-center relative">
             
             {/* Card do QR Code */}
             <div className="relative flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm shadow-xl">
                <div className="text-right">
                  <p className="text-white font-bold text-sm mb-1">Baixe Agora</p>
                  <p className="text-gray-400 text-[10px] leading-tight">Disponível para <br/>iOS e Android</p>
                </div>
                {/* QR Code */}
                <div className="bg-white p-1 rounded-lg shrink-0">
                  <img 
                    src="/assets/images/qrcode.png" 
                    alt="QR Code" 
                    className="w-16 h-16"
                  />
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
}