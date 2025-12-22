import React from 'react';
import { motion } from 'framer-motion';
import LeadForm from '../../components/form/LeadForm';
import { fadeInUp, staggerContainer } from '../../lib/utils';

export function HeroCapture() {
  return (
    <section className="relative min-h-screen flex items-center pt-8 pb-20 md:pb-32 overflow-hidden bg-[#583CE3]">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/Pessoa1.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#583CE3] via-[#583CE3]/20 to-[#583CE3]/05"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* COPYWRITING */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="lg:col-span-7 space-y-4 md:space-y-6 text-center lg:text-left text-white"
          >
            {/* LOGO */}
            <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start mb-4 md:mb-6">
              <img 
                src="/assets/Logo1.png" 
                alt="Buddy B Logo" 
                className="h-16 md:h-20 w-auto drop-shadow-md" 
              />
            </motion.div>

            {/* HEADLINE */}
            <motion.h1 
              variants={fadeInUp} 
              className="text-3xl md:text-5xl lg:text-6xl font-heading font-semibold leading-[1.2] tracking-tight text-white drop-shadow-md"
            >
              Chegou o Buddy B, <br />
              o app que ajuda você a <br />
              organizar e entender <br />
              suas finanças.
            </motion.h1>

            {/* DISCOUNT INFO */}
            <motion.div variants={fadeInUp} className="pt-2 md:pt-4">
              <h2 className="text-2xl md:text-4xl font-heading font-bold mb-2 text-white">
                Assine agora com <br />
                <span className="text-[#FFD400]">80% DE DESCONTO!</span>
              </h2>
              
              <p className="hidden md:block text-lg md:text-xl text-white/90 italic font-body mt-4 font-medium">
                Saia na frente e garanta essa condição agora mesmo!
              </p>
            </motion.div>

            <motion.p variants={fadeInUp} className="hidden lg:block text-sm text-white/70 mt-8 font-body">
              *Desconto válido apenas para o plano anual.
            </motion.p>
          </motion.div>

          {/* FORM CONTAINER */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center"
            id="formulario"
          >
            <div className="bg-white rounded-[20px] shadow-2xl border border-white/50 p-5 md:p-8 relative z-30 w-full max-w-lg md:scale-[0.95] origin-top-right mt-6 md:mt-0">
               <LeadForm />
            </div>

            <p className="lg:hidden text-[10px] text-white/80 mt-4 font-body text-center">
              *Desconto válido apenas para o plano anual.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}