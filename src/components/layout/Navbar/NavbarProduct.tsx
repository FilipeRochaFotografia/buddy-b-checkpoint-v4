import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function NavbarProduct() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Diferenciais', href: '/#funcionalidades', isHash: true },
    { label: 'Planos', href: '/#planos', isHash: true }, 
    { label: 'Depoimentos', href: '/#depoimentos', isHash: true },
    { label: 'Blog', href: '/blog', isHash: false },     
    { label: 'FAQ', href: '/faq', isHash: false }, 
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { href: string; isHash: boolean }) => {

    if (item.isHash && location.pathname === '/') {
      const targetId = item.href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else {


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
              className="h-[64px] w-auto object-contain" 
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          
          <div className="flex gap-8">
            {navLinks.map((item) => (
              item.isHash && location.pathname === '/' ? (
                // Link Âncora Desktop
                <a
                  key={item.label}
                  href={item.href.replace('/', '')} 
                  onClick={(e) => handleLinkClick(e, item)}
                  className="font-heading font-bold text-[#424242] text-[18px] transition-colors hover:text-[#9B80FF] cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                // Link Rota Desktop
                <Link
                  key={item.label}
                  to={item.href}
                  className="font-heading font-bold text-[#424242] text-[18px] transition-colors hover:text-[#9B80FF] cursor-pointer"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="http://buddybapp.com/app" target="_blank" rel="noopener noreferrer">
              <button className="w-[69px] h-[48px] bg-[#9B80FF] text-white font-heading font-bold rounded-[15px] hover:bg-[#8a6df0] transition-colors shadow-sm text-sm flex items-center justify-center">
                Entrar
              </button>
            </a>

            <a href="http://buddybapp.com/app" target="_blank" rel="noopener noreferrer">
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
             item.isHash && location.pathname === '/' ? (

              <a
                  key={item.label}
                  href={item.href.replace('/', '')}
                  onClick={(e) => handleLinkClick(e, item)}
                  className="text-lg font-heading font-bold text-[#424242]"
                >
                  {item.label}
                </a>
              ) : (

                <Link
                  key={item.label}
                  to={item.href}
                  className="text-lg font-heading font-bold text-[#424242]"
                >
                  {item.label}
                </Link>
              )
          ))}
          <div className="flex flex-col gap-3 mt-2">
             <a href="http://buddybapp.com/app" target="_blank" rel="noopener noreferrer">
                <button className="w-full h-[48px] bg-[#9B80FF] text-white font-bold rounded-[15px]">Entrar</button>
             </a>
             <a href="http://buddybapp.com/app" target="_blank" rel="noopener noreferrer">
                <button className="w-full h-[48px] border-2 border-[#9B80FF] text-[#9B80FF] font-normal rounded-[15px]">Cadastrar</button>
             </a>
          </div>
        </div>
      )}
    </nav>
  );
}