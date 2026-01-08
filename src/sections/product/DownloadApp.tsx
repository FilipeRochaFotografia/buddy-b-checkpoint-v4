import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/utils';

export function DownloadApp() {
  return (
    /* Download App Section */
    <section className="relative py-12 lg:py-24 bg-[#EDEDED] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center relative z-10"
        >
          
          {/* Left Column */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center lg:items-start lg:pl-16">
            
            <h2 className="font-heading font-bold text-[#424242] text-[30px] leading-[41px] lg:text-[32px] lg:leading-[47px] mb-4 w-[352px] lg:w-[505px] max-w-full text-left">
              Tenha controle total das suas finanças na palma da mão
            </h2>
            
            <p className="font-body font-normal text-[#424242] text-[20px] leading-[27px] lg:text-[26px] lg:leading-[35px] text-justify w-[347px] lg:w-[586px] max-w-full mb-8">
              Escaneie o QR Code com a câmera do seu celular e instale o Buddy B em poucos segundos.
            </p>
            
            <div className="w-[220px] h-[220px] bg-white p-2 shadow-sm mb-8 lg:mb-0">
               <img 
                 src="/assets/images/qrcode.png" 
                 alt="QR Code" 
                 className="w-full h-full object-contain" 
               />
            </div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div variants={fadeInUp} className="relative flex flex-col items-center lg:items-end lg:pr-16">
             
             <div className="relative flex flex-col items-center justify-center mb-6 lg:mb-0">
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                  <img 
                    src="/assets/images/fundocelular.png" 
                    alt="" 
                    className="w-[350px] lg:w-[450px] h-auto max-w-none opacity-80" 
                  />
               </div>

               <div className="relative z-10 w-[240px] lg:w-[280px] h-auto mb-4 lg:mb-8">
                  <img 
                    src="/assets/images/990980.png" 
                    alt="App Buddy B Mobile" 
                    className="w-full h-auto drop-shadow-2xl" 
                  />
               </div>

               <div className="hidden lg:flex relative z-20 items-center gap-4 lg:mr-8">
                  <span className="font-body text-[#4D4D4D] font-semibold text-sm">Baixe o app</span>
                  <img 
                    src="/assets/images/disponivel.png" 
                    alt="Disponível no Google Play e App Store" 
                    className="h-[42px] w-auto object-contain cursor-pointer" 
                  />
               </div>
             </div>

             <div className="flex lg:hidden w-full max-w-[350px] items-center justify-between mt-4 px-2">
                <span className="font-body text-[#4D4D4D] font-semibold text-[14px] leading-[19px]">
                  Baixe o app
                </span>
                <img 
                  src="/assets/images/disponivel.png" 
                  alt="Disponível no Google Play e App Store" 
                  className="w-[210px] h-auto object-contain cursor-pointer" 
                />
             </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}