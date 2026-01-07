import React from 'react';

export function DownloadApp() {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 font-heading font-bold text-text-title">
              Tenha controle total das suas finanças na palma da mão
            </h2>
            <p className="text-text-body mb-8 font-body">
              Escaneie o QR Code com a câmera do seu celular e instale o Buddy B em poucos segundos.
            </p>
            
            {/* QR Code Placeholder */}
            <div className="w-40 h-40 bg-white p-2 rounded-[20px] shadow-sm mb-6 flex items-center justify-center">
               <img src="/assets/images/qrcode.png" alt="QR Code" className="w-full h-full object-contain" />
            </div>

            <div className="flex gap-4">
               <div className="bg-black text-white px-4 py-2 rounded-lg text-xs flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                  {/* Ícone Play Store Placeholder */}
                  <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                  <span>Google Play</span>
               </div>
               <div className="bg-black text-white px-4 py-2 rounded-lg text-xs flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                  {/* Ícone Apple Placeholder */}
                  <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                  <span>App Store</span>
               </div>
            </div>
          </div>
          
          <div className="relative flex justify-end">
             {/* Blob Amarelo atrás da mão */}
             <div className="absolute top-10 right-10 w-80 h-80 bg-alert rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
             
             {/* Imagem Mão (Certifique-se que existe em /assets/images/mao-app.png) */}
             <img 
               src="/assets/images/mao-app.png" 
               alt="Mão segurando app" 
               className="relative z-10 max-w-sm w-full h-auto drop-shadow-2xl" 
             />
          </div>
        </div>
      </div>
    </section>
  );
}