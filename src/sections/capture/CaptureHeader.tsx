import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../../components/ui/Icons';

export function CaptureHeader() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-50 py-6"
    >
      <div className="container mx-auto px-4 flex justify-center md:justify-start">
        {/* Link removido: Apenas visual para ancoragem de marca */}
        <div className="cursor-default select-none">
           <Logo size={32} />
        </div>
      </div>
    </motion.header>
  );
}