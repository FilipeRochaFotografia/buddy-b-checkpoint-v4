import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function NavbarProduct() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Indicadores', href: '#' },
    { label: 'Planos', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contato', href: '#footer' },
    { label: 'FAQ', href: '#' },
  ];

  return (
    // Background da cor da Features (#F3F4F6)
    <nav className="absolute top-0 left-0 w-full z-50 py-6 bg-[#F3F4F6]">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* 1. LOGO (Esquerda) */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img 
              src="/assets/images/Logo2.png" 
              alt="Buddy B" 
              className="h-[48px] w-auto object-contain" 
            />
          </Link>
        </div>

        {/* 2. CONTEÚDO ALINHADO À DIREITA (Links + Botões) */}
        <div className="hidden lg:flex items-center gap-10">
          
          {/* Links de Navegação */}
          <div className="flex gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-heading font-bold text-[#424242] text-[18px] hover:text-[#9B80FF] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Botões */}
          <div className="flex items-center gap-4">
            
            {/* Botão Entrar */}
            {/* Figma: 69x48, Radius 15, Bold */}
            <Link to="/login">
              <button className="w-[69px] h-[48px] bg-[#9B80FF] text-white font-heading font-bold rounded-[15px] hover:bg-[#8a6df0] transition-colors shadow-sm text-sm flex items-center justify-center">
                Entrar
              </button>
            </Link>

            {/* Botão Cadastrar */}
            {/* Figma: Radius 15, Border 2px, Normal (400) */}
            <Link to="/oferta">
              <button className="h-[48px] px-6 bg-transparent border-2 border-[#9B80FF] text-[#9B80FF] font-heading font-normal rounded-[15px] hover:bg-[#9B80FF] hover:text-white transition-colors text-sm flex items-center justify-center">
                Cadastrar
              </button>
            </Link>
          </div>

        </div>

        {/* MOBILE TOGGLE (Hambúrguer) */}
        <button 
          className="lg:hidden p-2 text-[#424242]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M4 12h16M4 6h16M4 18h16"/>}
          </svg>
        </button>

      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F3F4F6] shadow-lg border-t border-gray-200 p-6 flex flex-col gap-6 lg:hidden z-50">
          {navLinks.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-lg font-heading font-bold text-[#424242]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-2">
             <Link to="/login">
                <button className="w-full h-[48px] bg-[#9B80FF] text-white font-bold rounded-[15px]">Entrar</button>
             </Link>
             <Link to="/oferta">
                <button className="w-full h-[48px] border-2 border-[#9B80FF] text-[#9B80FF] font-normal rounded-[15px]">Cadastrar</button>
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
}