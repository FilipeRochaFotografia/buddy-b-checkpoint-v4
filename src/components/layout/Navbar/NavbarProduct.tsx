import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function NavbarProduct() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Indicadores', href: '#indicadores' },
    { label: 'Planos', href: '#planos' }, // Certifique-se que PricingGeneral tem id="planos"
    { label: 'Blog', href: '#blog' },     // Certifique-se que BlogPreview tem id="blog"
    { label: 'Contato', href: '#footer' }, // Certifique-se que Footer tem id="footer" ou a section de contato
    { label: 'FAQ', href: '#' },
  ];

  // Função para lidar com o Scroll Suave
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Impede o recarregamento/mudança de URL
    
    // Se for FAQ ou link vazio, não faz nada
    if (href === '#') return;

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Fecha o menu mobile ao clicar
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 bg-[#F3F4F6]">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img 
              src="/assets/images/Logo2.png" 
              alt="Buddy B" 
              className="h-[48px] w-auto object-contain" 
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          
          <div className="flex gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`font-heading font-bold text-[#424242] text-[18px] transition-colors ${
                  item.label === 'FAQ' ? 'cursor-default opacity-70' : 'hover:text-[#9B80FF] cursor-pointer'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="http://app.buddybapp.com/" target="_blank" rel="noopener noreferrer">
              <button className="w-[69px] h-[48px] bg-[#9B80FF] text-white font-heading font-bold rounded-[15px] hover:bg-[#8a6df0] transition-colors shadow-sm text-sm flex items-center justify-center">
                Entrar
              </button>
            </a>

            <a href="http://app.buddybapp.com/" target="_blank" rel="noopener noreferrer">
              <button className="h-[48px] px-6 bg-transparent border-2 border-[#9B80FF] text-[#9B80FF] font-heading font-normal rounded-[15px] hover:bg-[#9B80FF] hover:text-white transition-colors text-sm flex items-center justify-center">
                Cadastrar
              </button>
            </a>
          </div>

        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden p-2 text-[#424242]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M4 12h16M4 6h16M4 18h16"/>}
          </svg>
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F3F4F6] shadow-lg border-t border-gray-200 p-6 flex flex-col gap-6 lg:hidden z-50">
          {navLinks.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className={`text-lg font-heading font-bold text-[#424242] ${item.label === 'FAQ' ? 'opacity-70' : ''}`}
              onClick={(e) => handleScroll(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-2">
             <a href="http://app.buddybapp.com/" target="_blank" rel="noopener noreferrer">
                <button className="w-full h-[48px] bg-[#9B80FF] text-white font-bold rounded-[15px]">Entrar</button>
             </a>
             <a href="http://app.buddybapp.com/" target="_blank" rel="noopener noreferrer">
                <button className="w-full h-[48px] border-2 border-[#9B80FF] text-[#9B80FF] font-normal rounded-[15px]">Cadastrar</button>
             </a>
          </div>
        </div>
      )}
    </nav>
  );
}