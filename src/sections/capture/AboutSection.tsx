import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/utils';

export function AboutSection() {
  return (
    <section className="py-12 md:pt-16 md:pb-8 bg-[#1a1b26] text-white border-t border-gray-800">
      <div className="container mx-auto px-4">
        
        {/* Container Animado */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          
          {/* LOGO */}
          <motion.div variants={fadeInUp} className="mb-4 md:mb-6">
              <img 
                src="/assets/Logo1.png" 
                alt="Buddy B" 
                className="h-8 md:h-10" 
              />
          </motion.div>
          
          {/* TEXTO */}
          <motion.p 
            variants={fadeInUp}
            className="text-gray-400 leading-relaxed text-xs md:text-sm max-w-2xl font-light px-2 md:px-0"
          >
            O <strong>Buddy B</strong> nasceu com a missão de simplificar a gestão financeira pessoal. 
            Nossa tecnologia segura ajuda milhares de pessoas a tomarem melhores decisões todos os dias.
          </motion.p>

        </motion.div>

      </div>
    </section>
  );
}