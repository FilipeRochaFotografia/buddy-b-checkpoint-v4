import React from 'react';
import { motion } from 'framer-motion';
import LeadForm from '../../components/form/LeadForm';
import { fadeInUp, staggerContainer } from '../../lib/utils';

export function RescueSection() {
  
  const BadgeItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center gap-2 group cursor-default">
      <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors shrink-0">
        {icon}
      </div>
      <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wide whitespace-nowrap">
        {text}
      </span>
    </div>
  );

  const LockIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );

  const ShieldIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );

  const ClockIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  return (
    <section id="resgate" className="py-20 md:py-24 bg-gradient-to-br from-[#583CE3] to-[#9B80FF] relative overflow-hidden">
      
      {/* BACKGROUND ANIMATION */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4 mix-blend-overlay" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#583CE3]/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/4 mix-blend-multiply" 
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: FORM */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 lg:order-1 order-2 flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-md bg-white rounded-[20px] shadow-2xl p-6 md:p-8 transform transition-transform hover:scale-[1.01] duration-500">
                <div className="text-center mb-6">
                   <p className="text-xs font-bold text-[#9B80FF] uppercase tracking-widest mb-1 animate-pulse">Última chance</p>
                   <h3 className="text-2xl font-heading font-bold text-[#424242]">Garanta 80% OFF</h3>
                </div>
                <LeadForm showTitle={false} />
            </div>

            {/* MOBILE BADGES (2 Items) */}
            <div className="mt-8 lg:hidden flex flex-row justify-center items-center gap-4 opacity-90 w-full px-1">
               <BadgeItem icon={LockIcon} text="Pagamento Seguro" />
               <BadgeItem icon={ClockIcon} text="Acesso Imediato" />
            </div>

          </motion.div>

          {/* RIGHT: TEXT */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-7 lg:order-2 order-1 text-center lg:text-left lg:pl-8 flex flex-col items-center lg:items-start"
          >
            
            <motion.div variants={fadeInUp} className="mb-6">
              <img 
                src="/assets/Logo1.png" 
                alt="Buddy B" 
                className="h-16 md:h-20 w-auto drop-shadow-lg" 
              />
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Pode experimentar <br className="md:hidden" />
              <span className="text-[#FFD400]">sem medo.</span>
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="text-white/90 font-body mb-8 leading-relaxed">
              {/* MOBILE TEXT */}
              <div className="md:hidden text-sm px-4">
                <p className="mb-4">
                  O Buddy B foi criado <br/>
                  para dar mais controle às suas finanças.
                </p>
                <p>
                  Garanta sua vaga com <strong className="text-[#FFD400]">80% de desconto</strong> <br/>
                  e tenha mais clareza financeira no dia a dia.
                </p>
              </div>

              {/* DESKTOP TEXT */}
              <div className="hidden md:block text-xl max-w-xl">
                <p>
                  O Buddy B foi criado para dar mais controle às suas finanças.<br/>
                  Garanta sua vaga com <strong className="text-[#FFD400]">80% de desconto</strong><br/>
                  e tenha mais clareza financeira no dia a dia.
                </p>
              </div>
            </motion.div>

            {/* DESKTOP BADGES (3 Items) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="hidden lg:flex w-full justify-start items-center gap-6 mt-4"
            >
               <BadgeItem icon={LockIcon} text="Pagamento Seguro" />
               <BadgeItem icon={ShieldIcon} text="Dados Protegidos" />
               <BadgeItem icon={ClockIcon} text="Acesso Imediato" />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}