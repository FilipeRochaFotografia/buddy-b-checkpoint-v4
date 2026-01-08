import React from 'react';
import { Link } from 'react-router-dom';

export function FooterCapture() {
  return (
    <footer className="bg-[#1a1b26] text-white pb-8 pt-4">
      <div className="container mx-auto px-4">
        
        {/* DIVIDER */}
        <hr className="border-gray-800/50 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          
          {/* COPYRIGHT */}
          <p className="text-center md:text-left">
            © 2026 Buddy B System. Todos os direitos reservados.
          </p>
          
          {/* LINKS FUNCIONAIS */}
          <div className="flex gap-6 items-center">
            <Link to="/termos-de-uso" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link to="/politica-privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}