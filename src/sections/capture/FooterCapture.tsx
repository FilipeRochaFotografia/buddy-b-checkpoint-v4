import React from 'react';
import { motion } from 'framer-motion';

export function FooterCapture() {
  return (
    <footer className="bg-[#1a1b26] text-white pb-8 pt-4 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4"
      >
        <hr className="border-gray-800/50 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="text-center md:text-left">
            © 2025 Buddy B System. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}