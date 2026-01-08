import React from 'react';

export function DownloadApp() {
  return (
    <section className="relative py-24 bg-[#EDEDED] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* COLUNA ESQUERDA: TEXTO + QR CODE */}
          <div>
            <h2 className="font-heading font-bold text-[#424242] text-[32px] leading-[47px] mb-4 max-w-[505px]">
              Tenha controle total das suas finanças na palma da mão
            </h2>
            
            <p className="font-body font-normal text-[#424242] text-[26px] leading-[35px] text-justify mb-8 max-w-[586px]">
              Escaneie o QR Code com a câmera do seu celular e instale o Buddy B em poucos segundos.
            </p>
            
            {/* QR Code */}
            <div className="w-[220px] h-[220px] bg-white p-2 shadow-sm">
               <img 
                 src="/assets/images/qrcode.png" 
                 alt="QR Code" 
                 className="w-full h-full object-contain" 
               />
            </div>
          </div>
          
          {/* COLUNA DIREITA: CELULAR + FUNDO + LOJAS */}
          <div className="relative flex flex-col items-center lg:items-end mt-12 lg:mt-0">
             
             {/* Imagem de Fundo (Elipses/Blob) - Tamanho ajustado conforme referência CSS */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                <img 
                  src="/assets/images/fundocelular.png" 
                  alt="" 
                  // Largura combinada aproximada das duas elipses sobrepostas
                  className="w-[380px] h-auto max-w-none opacity-80" 
                />
             </div>

             {/* Imagem Celular (Mão substituída por 68786.png) */}
             <div className="relative z-10 w-[464px] h-auto mb-4 flex justify-center lg:justify-end">
                <img 
                  src="/assets/images/68786.png" 
                  alt="App Buddy B Mobile" 
                  className="w-full h-auto drop-shadow-xl" 
                />
             </div>

             {/* Botões Lojas (Imagem Única) */}
             <div className="relative z-20 flex items-center gap-4 mr-8 lg:mr-12">
                <span className="font-body text-[#424242] text-sm">Baixe o app</span>
                <img 
                  src="/assets/images/disponivel.png" 
                  alt="Disponível no Google Play e App Store" 
                  className="h-[42px] w-auto object-contain cursor-pointer" 
                />
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}